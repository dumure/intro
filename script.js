// Task1

let flashDriveSizeGB = parseInt(prompt("Введите объем флешки в ГБ: "));
let fileCount = Math.floor((flashDriveSizeGB * 1024) / 820);
alert("Количество файлов: " + fileCount);

let number = parseInt(prompt("Введите трехзначное число: "));
let reverseNumber = (number % 10) * 100 + (Math.floor(number / 10) % 10) * 10 + Math.floor(number / 100);
alert("Число задом наперед: " + reverseNumber);

let userNumber = parseInt(prompt("Введите целое число: "));
alert((userNumber % 2 === 0) && "Четное" || "Нечетное");

// Task2

let age = parseInt(prompt("Введите ваш возраст: "));
let category = age >= 0 && age < 12 ? "Ребенок" : age < 18 ? "Подросток" : age < 60 ? "Взрослый" : "Пенсионер";
alert("Вы: " + category);

let keyNumber = parseInt(prompt("Введите число от 0 до 9: "));
let symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
alert("Спецсимвол: " + symbols[keyNumber]);

let year = parseInt(prompt("Введите год: "));
let isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
alert(isLeapYear ? "Високосный год" : "Не високосный год");

// Task3

let positives = 0, negatives = 0, zeroes = 0, evens = 0, odds = 0;
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Введите число: "));
    if (num > 0) positives++;
    else if (num < 0) negatives++;
    else zeroes++;
    if (num % 2 === 0) evens++;
    else odds++;
}
alert(`Положительные: ${positives}, Отрицательные: ${negatives}, Нули: ${zeroes}, Четные: ${evens}, Нечетные: ${odds}`);

let continueCalc;
do {
    let num1 = parseFloat(prompt("Введите первое число: "));
    let num2 = parseFloat(prompt("Введите второе число: "));
    let operator = prompt("Введите оператор (+, -, *, /): ");
    let result = operator === "+" ? num1 + num2 :
        operator === "-" ? num1 - num2 :
            operator === "*" ? num1 * num2 :
                operator === "/" ? num1 / num2 : "Неверный оператор";
    alert("Результат: " + result);
    continueCalc = confirm("Хотите выполнить еще один расчет?");
} while (continueCalc);

// Task4

function compareNumbers(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
alert(compareNumbers(5, 3));

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
alert(factorial(5));

function timeToSeconds(hours = 0, minutes = 0, seconds = 0) {
    return hours * 3600 + minutes * 60 + seconds;
}
alert(timeToSeconds(1, 1, 1));

function secondsToTime(seconds) {
    let hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}
alert(secondsToTime(4567));

function sumNumbers(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    return sum;
}
alert(sumNumbers(1, 2, 3, 4, 5));
