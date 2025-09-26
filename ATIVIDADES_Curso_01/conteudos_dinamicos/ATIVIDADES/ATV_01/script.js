const seletor = document.getElementById("seletor");
const label = document.getElementById("seletor-label")

seletor.addEventListener("change", () => {
  label.classList.toggle("ativo", seletor.checked);
});
