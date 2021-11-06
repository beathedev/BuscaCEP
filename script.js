const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const localidade = document.querySelector('#localidade');
const uf = document.querySelector('#uf');
const hidden_show = document.querySelector('#hidden-show')

function consultarCep() {
    var cep = document.getElementById("cep").value
    var url = 'https://viacep.com.br/ws/' + cep + '/json'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onerror = function(e) {
        document.getElementById('resposta').innerHTML = 'API OFFLINE ou CEP INVÁLIDO'
        document.getElementById("cep").style.border = '1px solid red'

    }
    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if (response.erro === true) {
            document.getElementById('resposta').innerHTML = 'CEP NÃO ENCONTRADO'
        } else {
            hidden_show.style.display = 'block'
            logradouro.value = response.logradouro
            bairro.value = response.bairro
            localidade.value = response.localidade
            uf.value = response.uf
        }
    }

    request.send();
    logradouro.value = ''; // Limpa o campo
    bairro.value = ''; // Limpa o campo
    localidade.value = ''; // Limpa o campo
    uf.value = ''; // Limpa o campo
    hidden_show.style.display = 'none'
    resposta.innerHTML = ''

}