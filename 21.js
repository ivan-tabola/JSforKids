//Программируем игру
var words = [//Создаем массив со словами
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];

var word = words[Math.floor(Math.random() * words.length)];//Выбираем из массива случайнное слово

var answerArray = [];//Создаем итоговый массив и заполняем его символами подчеркивания
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;//Эта переменная понадобится, чтобы отслеживать количество букв, которые осталось угадать.

//Основа игрового цикла выглядит так:
while (remainingLetters > 0) {
    //Основной код
    
    
    //Обновляем answerArray и remainingLetters для каждого вхождения угаданной буквы
    alert(answerArray.join(" "));//Показываем состояние игры
    var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");//Запрашиваем вариант ответа
    if (guess === null) {
        break;//Выходим из игрового цикла
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную буквую");
    } else {
        //Обновляем состояние игры
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    //Конец игрового цикла
} 
//Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
