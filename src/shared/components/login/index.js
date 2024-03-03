export default function login() {
  const loginWrapper = document.createElement("div");
  loginWrapper.classList.add("login-header");
  const loginHeaderText = document.createElement("div");
  loginHeaderText.innerText = "Login";
  loginWrapper.append(loginHeaderText);
  return loginWrapper;
}
