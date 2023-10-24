//стр.108 №2.Генератор случайных строк
var alphabet = "абвгдеёжзийклмнопрстуфхцшщъыьэюя";
var randomString = "";
var alp = alphabet[Math.floor(Math.random() * alphabet.length)];

while(randomString < 6) {
    randomString += alp;
}
console.log(randomString);