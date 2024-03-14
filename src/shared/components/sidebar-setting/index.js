import { home } from "pages";

export default function sidebarSetting() {
  const sidebarSetting = document.createElement("div");
  sidebarSetting.classList.add(
    "flex",
    "flex-col",
    "w-12",
    "h-12",
    "items-center",
    "justify-center",
    "cursor-pointer"
  );
  const settings = document.createElement("i");
  settings.classList.add(
    "fa-solid",
    "fa-right-from-bracket",
    "fa-xl",
    "text-purple-700",
    "hover:text-pink-600"
  );
  sidebarSetting.append(settings);
  sidebarSetting.addEventListener("click", function (e) {
    localStorage.removeItem("user");
    document.getElementById("dashboardPage").remove();
    document.getElementById("app").append(home());
  });
  return sidebarSetting;
}
