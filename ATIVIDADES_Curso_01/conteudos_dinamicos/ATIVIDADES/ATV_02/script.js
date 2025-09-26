const label = document.getElementById("label-seletor");
const seletor = document.getElementById("seletor");

label.addEventListener("click", () => {
  if (seletor.checked) {
    label.classList.add("selecionado");
  } else {
    label.classList.remove("selecionado");
  }
});
