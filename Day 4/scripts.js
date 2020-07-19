console.log("jhi")
// Q1 
// for(i=0;i<=100;i++)
// {
//     if(i%3==0 && i%5==0)
//     {
//         console.log("fizzbuzz");
//     }
//     else if(i%3==0 && i%5!=0)
//     {
//         console.log("fizz");
//     }
//     else if(i%3!=0 && i%5==0)
//     {
//         console.log("buzz");
//     }
// }

// Q2
// const mh = {
//     name : "Helsinki",
//     age : 24,
//     projects : {
//         diceGame : "Two player dice game using JavaScript"
//     }
// }

// const {name,age,projects:{diceGame}} = mh;
 
// console.log(`Hey there my name is ${name} and my project is ${diceGame}`);

// Q3
// let sList = ["Caroot","Brinjal","Potato"];   
// let sBasket = [...sList];

// sBasket.push("Juice");
// sBasket.push("Ice Cream");


// console.log(sList);
// console.log(sBasket);

// Q4
// var num1 = prompt("Enter operand1");
// var op = prompt("Enter operator");
// var num2 = prompt("Enter operand2");

// num1=parseInt(num1);
// num2=parseInt(num2);

// switch(op){
//     case '+' : var res = a+b;
//                break;
//     case '-' : var res = a-b;
//                break;
//     case '*' : var res = a*b;
//                break;
//     case '/' : var res = a/b;
//                break;
//     case '^' : var res = Math.pow(a,b);
//                break;
//     case '%' : var res = a%b;
//                break;

// }
// console.log(`operand 1 is ${num1} operand 2 is ${num2} and result is ${res} `)


// Q5
// var s =prompt("What is the total sales made by an employee");
// s = parseInt(s);

// var com = 0
// if(s>=0 && s<=5000)
//     com += (s*2)/100;
// if(s>5000 && s<=10000)
//     com += (s*5)/100;
// if(s>10000 && s<=20000)
//     com += (s*7)/100;
// if(s>20000)
//     com += s/10;

// console.log(`The Total sales made during this year is ${s} and the Commision earned by them is ${com}`)

// Q6

// do {
//     var n = prompt("Enter a number > 100");
//     n = parseInt(n);
// }while(n<100)

// console.log(`The given number is ${n} which is greater than 100`);

// Q7

// var n =prompt("Enter a number");
// n = parseInt(n);

// for(let i = 2;i<=n;i++){
//     var count=0;
//     for(let j=2;j<=i;j++){
//         if(i%j==0)
//         count++;
//     }
//     if(count==1)
//     console.log(`The prime numbers are ${i}`);
// }



// Q8

// let ask=( question,yes,no)=>{
//     if(confirm(question)) yes()
//     else no();
// }
// ask("Do you agree?",
// function(){ alert("You Agreed.");}
// ,function(){alert("You canceled the execution.");});
