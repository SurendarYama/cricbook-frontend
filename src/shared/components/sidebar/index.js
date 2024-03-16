import { menu, sidebarSetting } from "components";

export default function sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "w-16",
    "p-2",
    "min-h-screen",
    "bg-slate-100"
  );
  sidebar.append(menu(), sidebarSetting());
  return sidebar;
}
