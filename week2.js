//1
function printHeart() {
    console.log("<3");
}
printHeart();

//2
function rant(message) {
    for(let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}
rant("I hate beets");

//3
function isSnakeEyes(num1,num2){
    if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes!");
    }else{
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);

//4
function multiply(num1,num2){
    console.log(num1 * num2);
}
multiply(2,3);
multiply(9,9);

//5
function isShortsWeather(temp){
    if(temp >= 75){
        return true;
    }else{
        return false;
    }
}
isShortsWeather(80);
isShortsWeather(48);

//6
function lastElement(arr){
    if(arr.length === 0){
        return null;
    }else{
        return arr[arr.length - 1];
    }
}
lastElement([3,5,7]);
lastElement([1]);
lastElement([]);

//7
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}
capitalize("eggplant");
capitalize("pamplemousse");
capitalize("squid");      

//8
function sumArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);

//9
function returnDay(num){
    const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(num < 1 || num > 7){
        return null;
    }else{
        return week[num - 1];
    }
}
returnDay(1);
returnDay(7);
returnDay(4);
returnDay(0);

//10
function returnDay(num){
    const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return num < 1 || num > 7 ? null : week[num - 1];
}
returnDay(1);
returnDay(7);
returnDay(4);
returnDay(0);