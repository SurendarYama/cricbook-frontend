export default function register() {
  const registerWrapper = document.createElement("div");
  registerWrapper.setAttribute("id", "registerWrapper");
  registerWrapper.classList.add("flex-1", "p-2");
  registerWrapper.innerHTML = "Register";
  return registerWrapper;
}
