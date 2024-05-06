//input utente
prompt("questo è l'inserimento dei tuoi dati ricorda che il primo numero deve essere maggiore rispetto al secondo ");
const firstname = prompt('Inserisci il tuo nome');
const lastname = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
const number1 = prompt('Inserisci il primo numero');
const number2 = prompt('Inserisci il secondo numero');
// input utente

//calcolo numeri 
const number3 = number1 / number2;
//calcolo numeri

const passw = firstname + lastname + color + number3;
//output per l'utente

document.getElementById('nome_utente').innerHTML = firstname;
document.getElementById('cognome_utente').innerHTML = lastname;
document.getElementById('colore').innerHTML = color;
document.getElementById('numero1').innerHTML = number1;
document.getElementById('numero2').innerHTML = number2;
document.getElementById('pass').innerHTML = passw