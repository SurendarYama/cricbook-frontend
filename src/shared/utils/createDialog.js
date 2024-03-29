export const createDialog = (opts) => {
  const dialog = document.createElement("dialog");
  dialog.classList.add("p-8", "space-y-6");
  const dialogCloseButton = document.createElement("button");
  dialogCloseButton.classList.add("dialog-button");
  dialogCloseButton.innerHTML = opts.closeButtonContent;
  dialogCloseButton.autofocus = true;
  dialogCloseButton.addEventListener("click", (e) => dialog.close());
  const dialogContent = document.createElement("p");
  dialogContent.classList.add("text-green-600");
  dialogContent.innerHTML = opts.content;
  dialog.append(dialogContent, dialogCloseButton);
  return dialog;
};
