document.getElementById('cep-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      alert('CEP inválido. O CEP deve conter 8 números.');
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado.');
        } else {
          document.getElementById('cep-result').textContent = data.cep;
          document.getElementById('logradouro').textContent = data.logradouro;
          document.getElementById('bairro').textContent = data.bairro;
          document.getElementById('cidade').textContent = data.localidade;
          document.getElementById('estado').textContent = data.uf;
  
          document.getElementById('address-card').classList.remove('hidden');
        }
      })
      .catch(error => console.error('Erro ao buscar CEP:', error));
  });
  