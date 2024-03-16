export const createImageTag = ({ src, alt, avatar }) => {
  const img = document.createElement("img");
  avatar &&
    img.classList.add(
      "rounded",
      "rounded-full",
      "w-12",
      "h-12",
      "cursor-pointer"
    );
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;
};
