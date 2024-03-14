import { header, register, login } from "components";

export default function home() {
  const home = document.createElement("div");
  home.setAttribute("id", "homePage");
  home.classList.add("flex", "flex-col", "w-screen", "min-h-full");
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "h-screen"
  );
  const authWrapper = document.createElement("div");
  authWrapper.classList.add(
    "flex",
    "bg-white",
    "w-6/12",
    "h-3/5",
    "rounded-3xl",
    "shadow-lg"
  );
  authWrapper.append(register(), login());
  homeWrapper.append(authWrapper);
  home.append(header(), homeWrapper);
  return home;
}
