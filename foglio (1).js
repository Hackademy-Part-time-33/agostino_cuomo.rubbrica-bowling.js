/* TRACCIA 1 */

let Traccia1 ={
    "nome": "agostino",
    "cognome" : "cuomo",
    "età": 24,
    "saluto" : function (parametro){
 return "Ciao, sono Agostino";
    }
}

console.log(Traccia1);
console.log(Traccia1.saluto());

/* TRACCIA 2 */
let rubrica = {
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],
    "MostraContatti" :function (){ this.contacts.forEach(contact => 
       console.log(contact)
        );
},
"Chiama" : function (nome){
    let filtrato =this.contacts.filter( contact => contact.nome == nome );
    return filtrato;

},
"Delete" : function (nome) {
    let cancellato = this.contacts.filter(contact => contact.nome != nome);
    return cancellato;
},
"AggiungiContatto" : function (nome, telefono) {
    let Nuovo ={ 'nome': nome, 'telefono': telefono};
    console.log(rubrica.contacts);
    return this.contacts.push(Nuovo);   
},
"ModificareIlContatto": function (nomeVecchio, nomeModificato, telefonoModificato){
    let filtrato =this.contacts.filter( contact => contact.nome == nomeVecchio );
    if (filtrato.length != 0){

         this.contacts.forEach( function (contact) {
            if (contact.nome == nomeVecchio){
                console.log("arriva");
                contact.nome = nomeModificato;
                contact.telefono = telefonoModificato;
                return this.contacts;
            }          
         }
         )
         return this.contacts;
    } else {
        console.log("Contatto non trovato");
    }
},
}
  console.log(rubrica.Chiama ("Lorenzo"));
  console.log(rubrica.Delete("Jenny"));
  console.log(rubrica.AggiungiContatto('jolly',345672));
 console.log(rubrica.ModificareIlContatto("Nicola", "Giovanni", 3657927));

/*  TRACCIA 3 */

let bowling = {
    "giocatori": [
    {"nome":"Agostino", "punteggio":"000"},
    {"nome":"Giovanni", "punteggio":"000"},
    {"nome":"Alessandra","punteggio":"000"},
    {"nome":"Marco","punteggio":"000"},
],
     "Agostino" : [],
     "Giovanni" : [],
     "Alessandra" : [],
     "Marco" : [],  

     "Partita" : function () {
           
for(i=0;i<=10;i++){
    let punteggioA = Math.floor(Math.random() * (10 - 1 +1) + 1);
    let punteggioG = Math.floor(Math.random() * (10 - 1 +1) + 1);
    let punteggioAl = Math.floor(Math.random() * (10 - 1 +1) + 1);
    let punteggioM = Math.floor(Math.random() * (10 - 1 +1) + 1);
    this.Agostino.push(punteggioA);
    this.Giovanni.push(punteggioG);
    this.Alessandra.push(punteggioAl);
     this.Marco.push(punteggioM);
}
this.giocatori.forEach((giocatore) =>{
if(giocatore.nome== "Agostino"){
    let score1= this.Agostino.reduce((a, b) => a+b);
    giocatore.punteggio= score1;
}else if (giocatore.nome == "Giovanni"){
    let score2= this.Giovanni.reduce((a,b) => a+b);
    giocatore.punteggio =score2;
}else if(giocatore.nome== "Alessandra"){
    let score3= this.Alessandra.reduce((a,b) => a+b);
    giocatore.punteggio =score3;
}else if(giocatore.nome =="Marco"){
    let score4= this.Marco.reduce((a,b) => a+b);
    giocatore.punteggio= score4;
}
}
)

console.log(this.Agostino);
console.log(this.Giovanni);
console.log(this.Alessandra);
console.log(this.Marco);
console.log(this.giocatori);

        },
        "AggiungereNuovoPlayer" :function (nome) {
            let sommaPunteggio =0;
            let nuovo = {"nome": nome, "punteggio": "000"};
            let NuovoPunteggio ={nome:[]};
            let NuovoPlayer= Object.assign(bowling, NuovoPunteggio);
            this.giocatori.push(nuovo);
            for(i=0;i<=10;i++){
                let score5= this.Marco.reduce((a,b) => a+b);
            nome.punteggio= score5;
             sommaPunteggio =+ score5;
            }
            this.giocatori.forEach((giocatore) =>{
            if(giocatore.nome == nome){

                giocatore.punteggio =sommaPunteggio;
            }
            })
        },
        "vincitore" : function (params) {
            let classifica = this.giocatori.sort((a,b)=>a.punteggio - b.punteggio );
            return classifica;
        }
    }

console.log(bowling.Partita());
console.log(bowling.AggiungereNuovoPlayer("franci"));
console.log(bowling);
console.log(bowling.vincitore());