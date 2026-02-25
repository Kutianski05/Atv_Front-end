document.getElementById("formEvento").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let ingresso = document.querySelector('input[name="ingresso"]:checked');

  if (nome === "" || email === "" || telefone === "" || !ingresso) {
    alert("Preencha todos os campos!");
    return;
  }

  alert("Inscrição realizada com sucesso!");
  this.reset();
});