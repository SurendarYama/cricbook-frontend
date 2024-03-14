export const createImageTag = ({ src, alt, avatar }) => {
  const img = document.createElement("img");
  avatar && img.classList.add("rounded", "rounded-full");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;
};
