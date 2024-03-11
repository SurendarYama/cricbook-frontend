export const createFormInput = (opts) => {
  const formField = document.createElement("label");
  formField.classList.add("space-y-2");
  const formFieldLable = document.createElement("span");
  formFieldLable.classList.add("form-lable");
  formFieldLable.innerText = opts.labelName;
  const formFieldInput = document.createElement("input");
  formFieldInput.classList.add("form-input");
  formFieldInput.setAttribute("type", opts.inputType);
  formFieldInput.setAttribute("required", true);
  formFieldInput.setAttribute("name", opts.inputName);
  formFieldInput.setAttribute("placeholder", opts.inputPlaceholder);
  formField.append(formFieldLable, formFieldInput);
  return formField;
};
