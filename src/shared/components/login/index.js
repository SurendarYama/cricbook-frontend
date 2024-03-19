import { createFormInput, createEmptyLink, createFormError } from "utils";
import { authUser } from "services";
import { dashboard } from "pages";
import { spinner } from "components";

export default function login() {
  const loginWrapper = document.createElement("div");
  loginWrapper.classList.add("login-header");
  const loginHeaderText = document.createElement("div");
  loginHeaderText.innerText = "Login";
  const form = document.createElement("form");
  form.setAttribute("name", "reset");
  form.classList.add("flex", "flex-col", "gap-y-5");
  const phoneeOrEmail = createFormInput({
    labelName: "Phone Number or Email Address*",
    inputType: "text",
    inputName: "loginId",
    inputPlaceholder: "SurendarYama",
  });
  const password = createFormInput({
    labelName: "Password*",
    inputType: "password",
    inputName: "password",
    inputPlaceholder: "Password",
  });
  const forgotPassword = createEmptyLink({
    href: "#",
    value: "Forgot Password",
  });
  const author = createEmptyLink({
    href: "https://github.com/SurendarYama",
    value: "Author: Surendar Yama",
  });
  const button = document.createElement("button");
  button.classList.add("auth-button");
  button.setAttribute("type", "submit");
  button.innerText = "Login";
  form.append(phoneeOrEmail, password, button);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userIdformData = formData.get("loginId");
    const userPasswordformData = formData.get("password");
    const emptyFeildsError = document.getElementById("emptyFeildsError");
    const serverError = document.getElementById("serverError");
    emptyFeildsError && emptyFeildsError.remove();
    serverError && serverError.remove();
    if (userIdformData && userPasswordformData) {
      button.innerHTML = spinner().innerHTML;
      const loginId = userIdformData.includes("@")
        ? userIdformData
        : parseInt(userIdformData);
      const user = {
        loginId,
        password: userPasswordformData,
      };
      const response = await authUser(
        `${import.meta.env.CRICBOOK_APP_BASE_URL}auth/login`,
        user
      );
      if (response.hasError) {
        button.innerHTML = "Login";
        const serverError = createFormError({
          errorMessage: response.message,
          id: "serverError",
        });
        loginWrapper.insertBefore(serverError, loginWrapper.firstChild);
      } else {
        button.innerHTML = "Login";
        localStorage.setItem("user", response["userId"]);
        form.reset();
        document.getElementById("homePage").remove();
        document.getElementById("app").append(dashboard());
      }
    } else {
      const error = createFormError({
        errorMessage: "All the feilds are required*.",
        id: "emptyFeildsError",
      });
      loginWrapper.insertBefore(error, loginWrapper.firstChild);
    }
  });
  loginWrapper.append(loginHeaderText, form, forgotPassword, author);
  return loginWrapper;
}
