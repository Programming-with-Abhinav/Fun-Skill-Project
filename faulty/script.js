let random = Math.random();
console.log(random);

let a = prompt("Enter a first number");
let c = prompt('enter a operation');
let b = prompt("enter a second number");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.1){
    console.log(`${a}  ${c} ${b}`)
    alert(`${eval(`${a}  ${c} ${b}`)}`)
}
else{
    c = obj[c]
    console.log(`${a}  ${c} ${b}`)
    alert(`${eval(`${a}  ${c} ${b}`)}`)
}