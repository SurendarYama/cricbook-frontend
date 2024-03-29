import { header, register, login } from "components";

export default function home() {
  const home = document.createElement("div");
  home.setAttribute("id", "homePage");
  home.classList.add("home");
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");
  const authWrapper = document.createElement("div");
  authWrapper.classList.add("auth-wrapper");
  authWrapper.append(register(), login());
  homeWrapper.append(authWrapper);
  home.append(header(), homeWrapper);
  return home;
}
