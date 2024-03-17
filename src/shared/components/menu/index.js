import { logo } from "components";
export default function menu() {
  const menu = document.createElement("div");
  menu.classList.add("flex", "flex-col", "w-12", "h-24", "space-y-2", "mt-2");
  menu.append(logo());
  return menu;
}
