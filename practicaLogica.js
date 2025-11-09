const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Enter a number "))
let num2 = parseInt(prompt("Enter a number "))
let num3 = parseInt(prompt("Enter a number "))

let mayorMinor = [];

let minorMayor = [];
console.log("");


if(num1 == num2 && num1 == num3){
    console.log(`Number ${num1} is equal to number ${num2} and number ${num3}`);
    mayorMinor.push(num1,num2,num3);
} else if(num1 == num2){
    console.log(`Number ${num1} is equal to number ${num2}`);
    
}else if(num1 == num3){
    console.log(`Number ${num1} is equal to number ${num3}`);
    
}else if(num2 == num3){
    console.log(`Number ${num2} is equal to number ${num3}`);
    
}
console.log("");

if (num1 > num2 && num1 > num3){
    console.log("Mayor number", num1);
    mayorMinor.push(num1);
    if(num2 > num3){
        console.log("Middle number",num2);
        console.log("Minor number",num3);
        mayorMinor.push(num2);
        mayorMinor.push(num3);
    }else{
        console.log("Middle number",num3);
        console.log("Minor number",num2);
        mayorMinor.push(num3);
        mayorMinor.push(num2);
    }
   
}else if(num2 > num1 && num2 > num3){
    console.log("Mayor Number",num2);
    mayorMinor.push(num2);
    if(num1 > num3){
        console.log("Middle number",num1);
        console.log("Minor number",num3);
        mayorMinor.push(num1);
        mayorMinor.push(num3);
    }else{
        console.log("Middle number",num3);
        console.log("Minor number",num1);
        mayorMinor.push(num3);
        mayorMinor.push(num1);
    }
    
}else if(num3 > num1 && num3 > num2 ){
    console.log("Mayor number ",num3);
    mayorMinor.push(num3);
    if(num1>num2){
        console.log("Middle number",num1);
        console.log("Minor number",num2);
        mayorMinor.push(num1);
        mayorMinor.push(num2);
    }else{
        console.log("Middle number",num2);
        console.log("Minor number",num1);
        mayorMinor.push(num2);
        mayorMinor.push(num1);
    }
}

let mayorMinorPrint = mayorMinor; 
console.log("\nFrom mayor to minor\n");

//console.log(mayorMinorPrint);
for(let i = 0; i < mayorMinorPrint.length; i++){
    console.log(mayorMinorPrint[i]);
}
minorMayor = [...mayorMinor].reverse();
console.log("\nFrom minor to mayor\n");
//console.log(minorMayor);

for(let i = 0; i < minorMayor.length;i++){
    console.log(minorMayor[i]);
}




