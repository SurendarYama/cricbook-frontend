export const createFormCheckBox = (opts) => {
  const formFeildCheckBox = document.createElement("div");
  const formFeildCheckBoxInput = document.createElement("input");
  formFeildCheckBoxInput.setAttribute("type", "checkbox");
  formFeildCheckBoxInput.checked = opts.checked;
  formFeildCheckBoxInput.classList.add("accent-purple-700");
  const formFeildCheckBoxContent = document.createElement("span");
  formFeildCheckBoxContent.classList.add("ml-2", "text-sm");
  formFeildCheckBoxContent.innerHTML = opts.checkboxContent;
  formFeildCheckBox.append(formFeildCheckBoxInput, formFeildCheckBoxContent);
  return formFeildCheckBox;
};
