let pakhi; //undefined hobe evabe
console.log(pakhi)

function add(num1, num2){
    console.log(num1 + num2)
} 
const result = add(12, 14);
console.log(result)          ///*****ekhane return na korar karone undefined dekhabe

function add(num1, num2){
    console.log(num1, num2)
} 
const result = add(12);
console.log(result)         // /*******parameter er value na dile undefined dekhabe

const person = {name: 'mehedi', phone: '01776856958'};
console.log(person.address)     //*********kono object er modde jodi property na thake tohole undefined dekhabe

let fun = undefined
console.log(fun) //************ */ ekhetter o undefined

let ages = [2, 3, 6]
console.log(ages[11]) //**********index 11 er man nai tai undefined hobe

