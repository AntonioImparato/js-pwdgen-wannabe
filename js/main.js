//input utente
prompt("questo è l'inserimento dei tuoi dati ricorda che il primo numero deve essere maggiore rispetto al secondo ");
const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
const number1 = prompt('Inserisci il primo numero');
const number2 = prompt('Inserisci il secondo numero');
// input utente



//calcolo numeri 
const number3 = number1 / number2;
//calcolo numeri



//generazione password
const passw = firstName + lastName + color + number3;
//generazione password


//output per l'utente in consol

const output = `
-------------Password Generator-------------

${firstName}${lastName}${color}${number3}

--------------------------------------------
`;
console.log(output);
//output per l'utente in consol




//output per l'utente html
document.getElementById('nome_utente').innerHTML = firstName;
document.getElementById('cognome_utente').innerHTML = lastName;
document.getElementById('colore').innerHTML = color;
document.getElementById('numero1').innerHTML = number1;
document.getElementById('numero2').innerHTML = number2;
document.getElementById('pass').innerHTML = passw
//output per l'utente html