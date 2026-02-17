/*  //chap 3 , exercise of arrays  and objects 

let services =['web dev', 'App Development', 'audith ', 'Digital Marketing'];
let i;
for(i=0;i<=services.length-1 ;i++){
    if (services[i]=='web dev'){
       services.splice(i+1,0,'cmunication')
    }
}


console.log(services[0],'it the 1 service ');
console.log(services[1],'it the 2 service ');
console.log(services[2],'it the 3 service ');
console.log(services[3],'it the 4 service ');
console.log('total service', services.length);
services.push('mecanical');

services[0] = 'programing';
console.log(services);

let touls = ['souris ','compuiter','router','printer'];
touls.push('scanner');
console.log(touls);
touls.splice(0,1,'keyboard', 'monitor');
touls.pop();
console.log(touls);
touls.splice(1,0,'microphone');

let touls2=['server','clouds'];
touls=touls.concat(touls2,touls2);
console.log(touls);
let endvlal=touls.indexOf('clouds');
let lastval=touls.lastIndexOf('clouds');
console.log('the first index  is pour le clouds ', endvlal);
console.log('the last index   pour le clouds ', lastval);   
console.log(touls);
console.table(touls);


// multi dimmetional array 

let bloc1=['c1','c2','c3'];
let bloc2=['c4','c5','c6'];
let bloc3=['c7','c8','c9'];

let totbloc=[bloc1,bloc2,bloc3];
let value=totbloc[1][2];
console.log(value);

let totbloc1=[[['1a','2a','2a','3a'],['4a','5a','6a','7a']],[['1b','b2','3b'],['4b','5b','6b','7b']],[['1c','2c','3c'],['4c','5c','6c','7c']]]

let valutotbloc1=totbloc1[0][1][2];
console.log(valutotbloc1);

//initiationof object and manipulation 


let computer={
    model:'hp',
    version :'840g2',
    color :'blue',
    ram :16,
    storage :'hdd',
}
console.log(computer.model);

let propriete ='color';
computer[propriete]='black',
console.log(computer)

propriete ='proceser'
computer[propriete]=2.3;
console.log(computer.proceser)
console.log(computer)

propriete ='sale';
computer[propriete]=true;

console.log(computer)
console.log(computer.ram);


//object in array , array in object ,object in array in oject


let victortranning= {
    nameorganisation:'victortraning',
    eleve:[],
    nationalite:['congolaise','rwandais','ugandaise'],
    identiteResponsable:[{
        nom :'mwendanga',
        lastnane:'babu',
        id:'001',
    },{
        nom:'baho',
        lastnane:'iragi',
        id:'002',
    },{
        nom:'zoza',
        lastnane:'kalume',
        id:'003',
    }], adresse :[{
        city:'goma',province:'bukavu',},
        {city :'bukavu',province :'bukavu '},
        {city:'bunia',province:'ituri',}]}


let eleve1={
    fistname:'BABU',
    lastname:'victor',
    id :'001'
}
let eleve2={
    fistname:'zoza',
    lastname:'abako',
    id :'002'

}

let eleve3={
    fistname:'jojo',
    lastname:'baho',
    id :'003'
}

victortranning.eleve.push(eleve1,eleve2,eleve3)
console.log(victortranning)
console.log(victortranning.nationalite)

console.log(victortranning.eleve[0].lastname)



// multiplication table 
console.log('..................multiplication table ..................');


var  table1 =[];
var variabletaille=10;
;

for(let x=0;x<=variabletaille;x++) {
    var lignetmp=[];

for (let y=0;y<=variabletaille;y++){
    lignetmp.push(x*y);
}
    table1.push(lignetmp); 
}


console.table(table1);

//initation  on functon and manipulation chapter 6


//exemple 1 :fuction to dislays the name of user 
function name(){
    let name=prompt('what is your name ?');
    console.log('welcome ', name);
}
 name();

 let namefuction = function(){
    let name=prompt('what is your name ?');
    console.log('welcome ', name);
}
namefuction();

let table =['smile','sad','angry','happy'];

function mameOfUser(){
    myName=prompt('what is your name ?');

    let indexNumber = Math.floor(Math.random()*table.length);

    console.log('welcome ', myName, 'your emotion is ', table[indexNumber]);
}
mameOfUser();


// chap 6 exercice : calculator

function calculator(num1,num2,operation){
    if (operation=='+'){
        return num1+num2;
    }
    else if (operation=='-'){
         return num1-num2;
      }
    else if (operation=='*'){
       return num1*num2; }
    else if (operation=='/'){
            return num1/num2;
        }
        else { return num1+num2; }};

        let num1=prompt('enter the first number');
        let num2=prompt('enter the second number');
        let operation=prompt('enter the operation you want to do +, -, *, /');
            num1=parseFloat(num1);
            num2=parseFloat(num2);
            operation=operation.trim();
        let result=calculator(num1,num2,operation);
        console.log('the result is ', result);





*/


// 1. On récupère le lien du menu et la section correspondante
const lienAbout = document.getElementById('aboutid');
const sectionAbout = document.getElementById('about');



lienAbout.addEventListener('click', function(event) {
    event.preventDefault(

    ); 

    document.querySelectorAll('.contenu').forEach(section => {
        section.classList.remove('active');
    });

    sectionAbout.classList.add('active');
});

const lienHome = document.getElementById('homeid');
const sectionHome = document.getElementById('home');

lienHome.addEventListener('click', function(event) {
    event.preventDefault(); 

    document.querySelectorAll('.contenu').forEach(section => {
        section.classList.remove('active');
    });

    sectionHome.classList.add('active');


}); 

const liencalcul = document.getElementById('calculatorid');
const sectioncalcul = document.getElementById('calculator');

liencalcul.addEventListener('click', function(event) {
    event.preventDefault(); 

    document.querySelectorAll('.contenu').forEach(section => {
        section.classList.remove('active');
    });

sectioncalcul.classList.add('active');

}); 

const liencomputer = document.getElementById('ordinateurid');
const sectioncomputer = document.getElementById('selection_computer');

liencomputer.addEventListener('click', function(event) {
    event.preventDefault();
    
    document.querySelectorAll('.contenu').forEach(section => {
        section.classList.remove('active');
    }); 
    sectioncomputer.classList.add('active');
});


// calculator section


function calculator(num1, num2, operation) 
{
    if (operation == '+') { return num1 + num2; }
    else if (operation == '-')
    { return num1 - num2; }
    else if (operation == '*') 
    { return num1 * num2; }
    else if (operation == '/') 
    { return num1 / num2; }
    else { return num1 + num2; }

}

let memoireNum1 = "";
let memoireNum2 = "";
let opChoisie = "";
let etape = 1;

function putvalue(chiffre) {
    if (etape === 1) {
        memoireNum1 =memoireNum1+chiffre;
        document.getElementById('ecran').innerText = memoireNum1;
    } else {
        memoireNum2 =memoireNum2+chiffre;
        document.getElementById('ecran').innerText = memoireNum1 + opChoisie + memoireNum2;
    }
}

function putop(op) {
    if (memoireNum1 !== "") {
        opChoisie = op;
        etape = 2; 
        document.getElementById('ecran').innerText = memoireNum1 + opChoisie;
    }
}

function calResulta() {
    let n1 = parseFloat(memoireNum1);
    let n2 = parseFloat(memoireNum2);
    
    let resultat = calculator(n1, n2, opChoisie);
    
    document.getElementById('ecran').innerText = resultat;
    
    // On réinitialise pour le prochain calcul
    memoireNum1 = resultat.toString();
    memoireNum2 = "";
    opChoisie = "";
    etape = 1;
}

function clean() {
    memoireNum1 = "";
    memoireNum2 = "";
    opChoisie = "";
    etape = 1;
    document.getElementById('ecran').innerText = "0";
}


class persone {
    constructor(fistName, lastName, age) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.age = age;
    }  

}


// execice chap 7 classe : initation on class and manipulation 

class ordinateurs{
    #storage; 
    constructor(model, version, color, ram, storage) {
    this.model = model;
    this.version = version;
    this.color = color;
    this.ram = ram;
    this.#storage = storage;
    }
    get storage() {
    return this.#storage + 'GB';
    }
    set storage(newvaleur){
     if (newvaleur < 0 || newvaleur > 100000){
         console.log('SVP  enter a valid storage value');
        } else {
            this.#storage = newvaleur;
        }   
    }
}
class laptop extends ordinateurs{
    constructor(model, version, color, ram, storage, autonomy){
    super(model, version, color, ram, storage);
    this.autonomy=autonomy;
    }
    verifiyautonomy(){
    if(this.autonomy<1 || this.autonomy >24){ console.log('please enter a valid autonomy value');}
        else{ console.log('autonomy dela   baterie  is ',this.autonomy, 'heures');}
    }
}

let arrayordinateurs = []; 

ordinateurs.prototype.ON=function(){
    console.log("a computer" + this.model +" is so clean and it is on");
}
ordinateurs.prototype.explotationSysteme=function(){
    if(this.model.toLowerCase()=='hp'||this.model.toLowerCase()=='dell'||this.model.toLowerCase()=='lenovo'){   
    console.log('the exploitation systeme of computer '+  this.model   +'is windows 10');
}
else if(this.model.toLowerCase()=='macbook'||this.model.toLowerCase()==' imac'  ||  this.model.toLowerCase()=='  macbook pro  '){
    console.log('the exploitation systeme of computer  '  +  this.model  +' is mac os ');
}}

function addcomputer()
{
let model = prompt('enter the model of computer');
let version = prompt('enter the version of ordinateur');
let color = prompt('enter couleur of ordinateur');
let ram = prompt('enter the ram of computer');
let  storage = prompt('enter the storage of computer');
let yeslaptop = confirm('is it a laptop ?');

if( model == ""|| version == "" || color == ""|| ram == "" || storage == ""){
    console.log("please recommencer you are missing a verb")
    return
};
let pcnew;
if (yeslaptop) {
    let autonimy = prompt('enter the autonomy of computer')
    pcnew = new laptop(model, version, color, ram, parseFloat(storage), parseFloat(autonimy))
}
else { 
    pcnew = new ordinateurs(model, version, color, ram, parseFloat(storage))
}

arrayordinateurs.push(pcnew);

console.log("verification prototype ");

console.table(arrayordinateurs);
pcnew.ON();
pcnew.explotationSysteme();
}


/*class Eleve{
    constructor(nom){
     this.nom=nom;
    }
    methodesafficherNom(){
        console.log('a name of  your ctudend is ',this.nom);
    }
    }

    let tableNom=[];

    function  sasiernom(){
        let nom =prompt('enter the name of student ');
        let eleve1=new Eleve(nom);
        tableNom.push(eleve1);
        eleve1.methodesafficherNom();
        console.table(tableNom);
    }
    sasiernom();

*/
