export const createAgree = (opts) => {
  const agree = document.createElement("span");
  const agreeContent = document.createElement("a");
  agreeContent.classList.add(
    "text-purple-900",
    "text-xs",
    "hover:text-red-600",
    "font-bold"
  );
  agreeContent.setAttribute("href", opts.href);
  agreeContent.innerText = opts.content;
  agree.append(agreeContent);
  return agree;
};
