export const createUserDetail = (opts) => {
  const userWrapper = document.createElement("div");
  userWrapper.classList.add("mt-1", "space-x-3");
  const userNode = document.createElement("span");
  userNode.classList.add("font-bold", "text-purple-600", "mt-1");
  userNode.innerText = opts.feildName;
  const userIcon = document.createElement("i");
  userIcon.classList.add("fa-solid", opts.icon, "text-purple-600");
  userWrapper.append(userIcon, userNode);
  return userWrapper;
};
