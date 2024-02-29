export default function login() {
  const loginWrapper = document.createElement("div");
  loginWrapper.setAttribute("id", "loginWrapper");
  loginWrapper.classList.add("flex-1", "bg-purple-300", "rounded-r-3xl", "p-2");
  loginWrapper.innerHTML = "Login";
  return loginWrapper;
}
