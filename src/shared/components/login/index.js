import { createFormInput, createEmptyLink } from "utils";

export default function login() {
  const loginWrapper = document.createElement("div");
  loginWrapper.classList.add("login-header");
  const loginHeaderText = document.createElement("div");
  loginHeaderText.innerText = "Login";
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-y-5");
  const usernameOrEmail = createFormInput({
    labelName: "Username or Email Address",
    inputType: "text",
    inputName: "userLoginId",
    inputPlaceholder: "",
  });
  const password = createFormInput({
    labelName: "Password",
    inputType: "password",
    inputName: "password",
    inputPlaceholder: "",
  });
  const forgotPassword = createEmptyLink({
    href: "#",
    value: "Forgot Password",
  });
  const author = createEmptyLink({
    href: "https://www.youtube.com/@surendar-yama",
    value: "Author: Surendar Yama",
  });
  const button = document.createElement("button");
  button.classList.add("auth-button");
  button.setAttribute("type", "submit");
  button.innerText = "Login";
  form.append(usernameOrEmail, password, button);
  loginWrapper.append(loginHeaderText, form, forgotPassword, author);
  return loginWrapper;
}
