// Задание-1.
function minOfTwo(a, b) {
    return a < b ? a : b;
}

// Задание-2.
function isEvenOrOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// Задание-3.
function printSquare(num) {
    console.log(num * num);
}

function getSquare(num) {
    return num * num;
}

// Задание-4.
function checkAge() {
    let age = parseInt(prompt('Сколько вам лет?'), 10);

    if (isNaN(age)) {
        alert('Вы ввели неправильное значение');
    } else if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
}

// Задание-5.
function multiplyIfNumbers(a, b) {
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        return 'Одно или оба значения не являются числом';
    }
    return a * b;
}

// Задание-6.
function cubeOfNumber() {
    let input = prompt('Введите число:');
    let num = parseFloat(input);

    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }
    return `${num} в кубе равняется ${num ** 3}`;
}

// Задание-7.
const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

document.querySelector('.mini-card .mini-card__button').addEventListener('click', (e) => {
    if (e.target.closest('.mini-card')?.querySelector('.mini-card__name')?.innerText.includes('Угадай число')) {
        guessNumberGame();
    }
});

