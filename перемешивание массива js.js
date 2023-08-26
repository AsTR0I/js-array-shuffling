// Функция для перемешивания массива в случайном порядке
function shuffle(input) {
    for (let i = input.length - 1; i >= 0; i--) {
        // Генерация случайного индекса от 0 до i включительно
        let randomIndex = Math.floor(Math.random() * (i + 1));

        // Обмен значений местами между текущим элементом и случайным элементом
        let itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input; // Возвращаем перемешанный массив
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Вызываем функцию shuffle и передаем ей массив array для перемешивания
let shuffledArray = shuffle(array);

console.log(shuffledArray); // Выводим перемешанный массив
