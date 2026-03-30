//Задание-1.
function task1() {
    console.log('--- Задание 1 ---');
    for (let i = 0; i < 2; i++) {
        console.log('Привет');
    }
}

// Задание-2.
function task2() {
    console.log('\n--- Задание 2 ---');
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// Задание-3.
function task3() {
    console.log('\n--- Задание 3 ---');
    for (let i = 7; i <= 22; i++) {
        console.log(i);
    }
}

// Задание-4.
function task4() {
    console.log('\n--- Задание 4 ---');
    let obj = {
        "Коля": '200',
        "Вася": '300',
        "Петя": '400'
    };
    for (let key in obj) {
        console.log(`${key} — зарплата ${obj[key]} долларов`);
    }
}

// Задание-5.
function task5() {
    console.log('\n--- Задание 5 ---');
    let n = 1000;
    let num = 0;
    while (n >= 50) {
        n = n / 2;
        num++;
    }
    console.log(`Результат деления: ${n}`);
    console.log(`Количество итераций: ${num}`);
}

// Задание-6.
function task6() {
    console.log('\n--- Задание 6 ---');
    let firstFriday = 5;   
    let daysInMonth = 31;
    for (let date = firstFriday; date <= daysInMonth; date += 7) {
        console.log(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
    }
}

