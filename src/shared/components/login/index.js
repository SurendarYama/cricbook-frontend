import { createFormInput, createEmptyLink } from "utils";

export default function login() {
  const loginWrapper = document.createElement("div");
  loginWrapper.classList.add("login-header");
  const loginHeaderText = document.createElement("div");
  loginHeaderText.innerText = "Login";
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-y-5");
  const phoneeOrEmail = createFormInput({
    labelName: "Phone Number or Email Address",
    inputType: "text",
    inputName: "userLoginId",
    inputPlaceholder: "SurendarYama",
  });
  const password = createFormInput({
    labelName: "Password",
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
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
  });
  loginWrapper.append(loginHeaderText, form, forgotPassword, author);
  return loginWrapper;
}
