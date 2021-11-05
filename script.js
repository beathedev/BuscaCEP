const form_div = document.querySelector('.form-div')
const buscar = document.querySelector('#buscar');
const inputCep = document.querySelector('#cep');
buscar.addEventListener('click', () => {
    var cep = inputCep.value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/'
    alert(url)
})