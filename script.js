
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
        'nome' : 'giovanni',
        'cognome' : 'rossi',
        'eta' : '33',
    },
    {
        'nome' : 'marco',
        'cognome' : 'gialli',
        'eta' : '27',
    },
    {
        'nome' : 'luca',
        'cognome' : 'verdi',
        'eta' : '18',
    }
];

for(let key in studenti){
    console.log(studenti[key]);
}

studenti.push(prompt("Nome"));
studenti.push(prompt("Cognome"));
studenti.push(parseInt(prompt("Eta")));

for(let key in studenti){
    console.log(studenti[key]);
}