var randomWord = ["Планета", "Червяк", "Цветок", "Компьютер"];
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
