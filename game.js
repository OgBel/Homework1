// Игра «УГАДАЙ ЧИСЛО»
function guessNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    alert('Загадано число от 1 до 100. Попробуй угадать!\nДля выхода нажми "Отмена" или введи "exit".');

    while (true) {
        let input = prompt('Введи число (или "exit" для выхода):');

        // Выход из окна игры
        if (input === null || input.toLowerCase() === 'exit') {
            alert('Игра прервана. Возвращайся, когда будешь готов!');
            return;
        }

        input = input.trim();
        if (input === '') {
            alert('Ты ничего не ввел. Попробуй снова.');
            continue;
        }

        const guess = Number(input);
        if (isNaN(guess)) {
            alert('Это не число! Введи число или "exit".');
            continue;
        }

        attempts++;
        if (guess < secretNumber) {
            alert(`Загаданное число БОЛЬШЕ ${guess}`);
        } else if (guess > secretNumber) {
            alert(`Загаданное число МЕНЬШЕ ${guess}`);
        } else {
            alert(`Угадал! Это число ${secretNumber}. Попыток: ${attempts}`);
            return;
        }
    }
}

document.querySelector('.mini-card .mini-card__button').addEventListener('click', (e) => {
    if (e.target.closest('.mini-card')?.querySelector('.mini-card__name')?.innerText.includes('Угадай число')) {
        guessNumberGame();
    }
});
