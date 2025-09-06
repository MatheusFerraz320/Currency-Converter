//variaveis iniciais 
    let form = document.getElementById("formConversao");
    let moeda1 = document.getElementById("moedaOrigem");
    let moeda2 = document.getElementById("moedaDestino");
    let resultado = document.getElementById("resultado");

  // Função que faz a conversão via API
function converterMoeda(origem, destino, valor) {
  const url = `https://api.frankfurter.app/latest?amount=${valor}&from=${origem}&to=${destino}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const convertido = data.rates[destino];
      resultado.textContent = `${valor} ${origem} = ${convertido.toFixed(2)} ${destino}`;
      resultado.classList.remove("text-danger");
      resultado.classList.add("text-success");
    })
    .catch(err => {
      resultado.textContent = "Erro ao converter. Selecione opções diferentes.";
      resultado.classList.add("text-danger");
    });
}

// Evento de submit do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o reload da página
    let origem = moeda1.value;
    let destino = moeda2.value;
    let valor = document.getElementById("valor").value;
    if (isNaN(valor) || valor <= 0) {
      resultado.textContent = "Por favor, insira um valor válido.";
      resultado.classList.add("text-danger");
      return;
    }
resultado.textContent = "Convertendo..."
resultado.classList.remove("text-danger");
  converterMoeda(origem, destino, valor);
});
   
    