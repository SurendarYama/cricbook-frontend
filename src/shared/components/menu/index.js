import { avatar } from "components";
import { logoImg } from "assets";
export default function menu() {
  const menu = document.createElement("div");
  menu.classList.add("flex", "flex-col", "w-12", "h-24", "space-y-2", "mt-2");

  menu.append(avatar(logoImg, "logo_image"));
  return menu;
}
