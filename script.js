
let studente = {
    nome : '',
    cognome : '',
    eta : ''
}

for(let key in studente){
    console.log(key);        //stampa delle proprietà dell'oggetto
}

let studenti = [
    {
        nome : 'giovanni',
        cognome : 'rossi',
        eta : '33',
    },
    {
        nome : 'marco',
        cognome : 'gialli',
        eta : '27',
    },
    {
        nome : 'luca',
        cognome : 'verdi',
        eta : '18',
    }
];

for(let i=0;i<studenti.length;i++){
    const studenteCorrente = studenti[i];

    console.log(studenteCorrente['nome']);
    console.log(studenteCorrente['cognome']);
    console.log(studenteCorrente['eta']);
}

const nomeUtente = prompt("Nome");
const cognmomeUtente = prompt("Cognome");
const etaUtente = parseInt(prompt("eta"));


let nuovoUtente = {};

nuovoUtente.nome = nomeUtente;
nuovoUtente.cognmome = cognmomeUtente;
nuovoUtente.eta = etaUtente;


console.log(nuovoUtente);