export const createFormSelect = (opts) => {
  const formField = document.createElement("label");
  formField.classList.add("space-y-2");
  const formFieldLable = document.createElement("span");
  formFieldLable.classList.add("form-lable");
  formFieldLable.innerText = opts.labelName;
  const formFieldSelect = document.createElement("select");
  formFieldSelect.classList.add("form-feild-select");
  const { options } = opts;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const optionNode = document.createElement("option");
    optionNode.classList.add("text-purple-700", "font-bold");
    option.selected && optionNode.setAttribute("selected", "selected");
    optionNode.setAttribute("value", option.name);
    optionNode.innerText = option.name;
    formFieldSelect.append(optionNode);
  }

  formField.append(formFieldLable, formFieldSelect);
  return formField;
};
