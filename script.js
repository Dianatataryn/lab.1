// Функція для виведення числа у зворотньому порядку цифр
function reverseDigits(number) {
    const reversedString = number.toString().split('').reverse().join('');
    return parseInt(reversedString);
}

// Функція для виведення числа у зворотньому порядку цифр
function reverseNumber() {
    const numberInput = document.getElementById('number');
    const number = parseInt(numberInput.value);
    const reversedNumber = reverseDigits(number);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Число у зворотньому порядку: ${reversedNumber}`;
}
