console.log("hello there")

// Q1
let n= prompt("Enter a number")
if(n%2==0){
    console.log(`The number entered is ${n} and Number is even`);
}
else{
    console.log(`The number entered is ${n} and Number is odd`);
}

// Q2
let input = prompt("Enter OS with its version");
a = input.split({ })
console.log(`The OS name is ${a[0]} and version is ${a[1]}`);

// Q3
let marks = prompt("Enter marks");
if(marks<70){
    console.log(`Marks are ${marks} and grade is B`)
}
else{
    
        console.log(`Marks are ${marks} and grade is A`)
    
}


console.log(marks>=7=?`Marks are ${marks} and grade is A`:`Marks are ${marks} and grade is B`);

