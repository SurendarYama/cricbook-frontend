import { javascriptLogo } from "assets";
import viteLogo from "/vite.svg";
import { createImageTag } from "utils";

export default function header() {
  const header = document.createElement("header");
  const jsImg = createImageTag({
    src: javascriptLogo,
    alt: "JavaScript-Logo",
  });
  const viteImg = createImageTag({
    src: viteLogo,
    alt: "Vite-Logo",
  });
  header.classList.add(
    "flex",
    "w-screen",
    "justify-center",
    "items-center",
    "gap-x-4",
    "bg-purple-300",
    "p-2"
  );
  const createdWithTextNode = document.createElement("span");
  createdWithTextNode.classList.add("font-bold", "font-mono");
  createdWithTextNode.append(document.createTextNode("Created with"));
  header.append(createdWithTextNode, jsImg, viteImg);
  return header;
}
