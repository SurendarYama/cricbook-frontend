export default function spinner() {
  const spinnerWrapper = document.createElement("div");
  spinnerWrapper.classList.add("flex");
  const spinnerIcon = document.createElement("i");
  spinnerIcon.classList.add("spinner-icon", "fa-solid", "fa-rotate-right");
  spinnerWrapper.append(spinnerIcon);
  return spinnerWrapper;
}
