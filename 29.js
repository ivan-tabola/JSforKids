//Ранний выход из функции по return
var fifthLetter = function (name1) {
    if (name1.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name1[4] + ".";
}