let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);

let num = 5;
let factorial = 1;
let i = 1;
while (i <= num) {
    factorial *= i;
    i++;
}
console.log(`Factorial of ${num} is ${factorial}`);

let num = 5;
let factorial = 1;
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= num);
console.log(`Factorial of ${num} is ${factorial}`);


let num = 5;
let factorial = 1;

if (num < 0) {
    console.log("Factorial is not defined for negative numbers");
} else if (num === 0 || num === 1) {
    console.log(`Factorial of ${num} is 1`);
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${num} is ${factorial}`);
}



let grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Fair");
        break;
    case 'D':
        console.log("Poor");
        break;
    case 'F':
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

let grades = ['A', 'B', 'C', 'D', 'F'];
let i = 0;
while (i < grades.length) {
    switch (grades[i]) {
        case 'A':
            console.log("Excellent");
            break;
        case 'B':
            console.log("Good");
            break;
        case 'C':
            console.log("Fair");
            break;
        case 'D':
            console.log("Poor");
            break;
        case 'F':
            console.log("Fail");
            break;
        default:
            console.log("Invalid grade");
    }
    i++;
}

let grades = ['A', 'B', 'C', 'D', 'F'];
let i = 0;
do {
    switch (grades[i]) {
        case 'A':
            console.log("Excellent");
            break;
        case 'B':
            console.log("Good");
            break;
        case 'C':
            console.log("Fair");
            break;
        case 'D':
            console.log("Poor");
            break;
        case 'F':
            console.log("Fail");
            break;
        default:
            console.log("Invalid grade");
    }
    i++;
} while (i < grades.length);

function getGradeDescription(grade) {
    switch (grade) {
        case 'A':
            return "Excellent";
        case 'B':
            return "Good";
        case 'C':
            return "Fair";
        case 'D':
            return "Poor";
        case 'F':
            return "Fail";
        default:
            return "Invalid grade";
    }
}

let grades = ['A', 'B', 'C', 'D', 'F', 'G'];
grades.forEach(grade => {
    console.log(`Grade ${grade}: ${getGradeDescription(grade)}`);
});

let grade = 'B';

if (grade === 'A') {
    console.log("Excellent");
} else if (grade === 'B') {
    console.log("Good");
} else if (grade === 'C') {
    console.log("Fair");
} else if (grade === 'D') {
    console.log("Poor");
} else if (grade === 'F') {
    console.log("Fail");
} else {
    console.log("Invalid grade");
}


function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter an operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

calculator();
