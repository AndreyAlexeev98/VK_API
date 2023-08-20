const elements = document.querySelectorAll("[data-bind]");
const checkbox = document.querySelector("#bindingEnabled");

let obj = {};
elements.forEach((item) => {
  const key = item.dataset.bind;

  if (!obj[key]) {
    obj[key] = [];
  }
  obj[key].push(item);
});
for (const el in obj) {
  const input = obj[el].find((item) => item.localName === "input");
  const span = obj[el].find((item) => item.localName === "span");

  input.addEventListener("input", (e) => {
    if (checkbox.checked) {
      span.textContent = e.target.value;
    }
  });
}
