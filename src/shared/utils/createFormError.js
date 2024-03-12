export const createFormError = (opts) => {
  const errorWrapper = document.createElement("div");
  errorWrapper.classList.add("text-xs", "text-red-600", "font-bold");
  errorWrapper.setAttribute("id", opts.id);
  errorWrapper.innerText = opts.errorMessage;
  return errorWrapper;
};
