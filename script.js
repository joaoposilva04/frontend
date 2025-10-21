let resultado = document.getElementById("paragrafo");
let input = document.getElementById("comida");
let botao = document.querySelector("#clicar");

botao.addEventListener("click", () => {
  if (input.value === "pão com ovo") {
    resultado.innerText = "é café da manhã";
  } else if (input.value === "feijão com arroz") {
    resultado.innerText = "é almoço";
  } else {
    resultado.innerText = "hora do jantar";
  }
});