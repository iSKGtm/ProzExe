const login = document.querySelector('h2');
login.style.textAlign = 'center';
login.style.color = 'red';
login.style.fontSize = '20px';

const button = document.getElementById('buttonLog');
button.style.alignSelf = 'center';
button.style.color = 'blue';
button.style.border = '2px solid blue';
button.style.borderRadius = '13px';
button.style.backgroundColor = 'white';

const names = document.querySelector("h4");
names.innerText = "Nomes: Anthony Max, Alano Silva, Luan G Dantas, FELIPE RIBEIRO"

const usernameInput = document.querySelector("#login-usuario")
usernameInput.classList.add('correct');

const errorMessage = document.querySelector('.error-text');
errorMessage.classList.add('none');

const passInput = document.querySelector("#login-senha")
passInput.classList.add('error');

const passErrorMessage = document.querySelector('.error-textPass');
passErrorMessage.classList.add('visible');

/* Anthony Max, Alano Silva, Luan G Dantas, FELIPE RIBEIRO */