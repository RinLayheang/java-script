//1.Variables & Strings
let firstname ="Layheang";
let lastname ="Rin";
console.log("Hello,my name is",firstname ,lastname)
//2. Numbers & Operators
let a=10;
let b=5;
let c=2;
console.log(a*b+c);

//3. Boolean & if/else
let boolean = require("readline-sync");
let isSunny = boolean.question("Is it sunny (yes/no):");
if (isSunny ==="yes"){
    console.log("Wear sunglasses")
}else{
    console.log("Take an umbrella")
}

//4.arrays
const age=[1,2,3,11,5];
for (let i in age){
    if (age[i]>10){
        console.log(age[i])
    }
}

//5.Objects
let book={
    title: "JavaScript Basics",
    author: "sreypov", 
    pages: 120
}
console.log("The book "+book.title+" by "+book.author+" has "+book.pages+" pages.");

//6.loops Even Numbers
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(let number of numbers){
    if (number%2!=0){
        console.log(number)
    }
}

//7.loops Countdown
let d=10;
while(d>=1){
    console.log(d);
    d--;
}

//8.array methods forEach
let your=[1,4,7,8,10,13,16,18];
your.forEach(num=>{
    console.log(num*2)
})

//9.string methods
let text="javaScript is fun!"
let trimmedText = text.trim();
let upperCase=trimmedText.toUpperCase();
console.log(upperCase);

//10.Count Passes students
let scores=[80,20,30,50,90,100,80,60];
let pass=0;
for (let score in scores){
    if(scores[score]>=60){
        pass++;
    }
}
console.log(pass);


// const readlineSync = require("readline-sync");

// let first_name = readlineSync.question('Enter your first name: ');
// let last_name = readlineSync.question('Enter your last name: ');

// console.log("Hello my name is "+first_name+" "+last_name);