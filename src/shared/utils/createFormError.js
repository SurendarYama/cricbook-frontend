export const createFormError = (opts) => {
  const errorWrapper = document.createElement("div");
  errorWrapper.classList.add("text-xs", "text-red-600", "font-bold");
  errorWrapper.innerText = opts.errorMessage;

  const toggleError = (toggleOpts) => {
    if (toggleOpts.className === "block") {
      errorWrapper.classList.remove("hidden");
      errorWrapper.classList.remove("block");
    } else {
      errorWrapper.classList.remove("block");
      errorWrapper.classList.remove("hidden");
    }
  };
  return [errorWrapper, toggleError];
};
