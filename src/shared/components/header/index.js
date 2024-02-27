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

  header.classList.add(["flex"]);
  header.append(jsImg, viteImg);
  return header;
}
