import { topbar } from "components";

export default function main(childNode) {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("flex", "p-8", "w-full");
  const main = document.createElement("div");
  main.classList.add("flex", "w-full", "bg-slate-100", "rounded-md", "p-2");
  main.append(topbar());
  childNode && main.append(...childNode);
  mainWrapper.append(main);
  return mainWrapper;
}
