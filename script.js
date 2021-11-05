const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');

function consultarCep() {
    var cep = document.getElementById("cep").value
    var url = 'https://viacep.com.br/ws/' + cep + '/json'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onerror = function(e) {
        document.getElementById('resposta').innerHTML = 'API OFFLINE ou CEP INVÁLIDO'
    }
    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if (response.erro === true) {
            document.getElementById('resposta').innerHTML = 'CEP NAO ENCONTRADO'
        } else {
            logradouro.value = response.logradouro
            bairro.value = response.bairro
            localidade.value = response.localidade
            uf.value = response.uf
        }
    }
    request.send();
}