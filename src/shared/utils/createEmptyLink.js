export const createEmptyLink = (opts) => {
  const emptyLinkWrapper = document.createElement("div");
  emptyLinkWrapper.classList.add("flex", "justify-center");
  const emptyLink = document.createElement("a");
  emptyLink.classList.add("text-purple-900", "hover:text-red-600", "font-bold");
  emptyLink.setAttribute("href", opts.href);
  emptyLink.innerText = opts.value;
  emptyLinkWrapper.append(emptyLink);
  return emptyLinkWrapper;
};
