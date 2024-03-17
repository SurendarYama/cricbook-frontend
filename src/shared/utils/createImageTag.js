export const createImageTag = ({ src, alt }) => {
  const img = document.createElement("img");

  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;
};
