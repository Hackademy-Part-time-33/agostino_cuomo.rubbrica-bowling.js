Traccia 1:
Crea un oggetto persona con le seguenti caratteristiche:
nome
cognome
eta'
un metodo che permetta di salutare

Traccia 2:
Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
mostrare tutti i contatti dell’agenda
chiamare un contatto
eliminare un contatto dall’agenda
aggiungere un nuovo contatto
modificare un contatto esistente

Suggerimento:
let rubrica = {
  'contacts': [
      {'nome': 'Nicola', 'telefono': '3331111111'},
      {'nome': 'Lorenzo', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Jenny', 'telefono': '3334444444'}
  ],
  ...
}
Traccia 3:
Crea un oggetto bowling con le seguenti caratteristiche:
una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
diverse funzionalità tra cui:
creare 10 punteggi casuali per ogni giocatore:
Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
trovare il punteggio finale per ogni giocatore:
Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
determinare il vincitore

EXTRA:
Crea un metodo per stilare la classifica finale dei giocatori

DATI DI PARTENZA:
let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    ...
}

