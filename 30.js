//Многократное использование return вместо конструкции if... else
var score = "";
if (score < 3) {
    return "Бронза";
} else if (score < 7) {
    return "Серебро";
} else {
    return "Золото";
}