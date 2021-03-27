var form = document.querySelector('#form');
var botao = document.querySelector('#btn-salvar');

botao.addEventListener('click', function (event) {
  event.preventDefault();
    alert("Hum deixa eu ver........ sua casa é:  " + form.q1.value);
});