// Функция для шифрования текста
function encrypt(text, key) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var index = key[0].indexOf(char);
        if (index !== -1) {
            encryptedText += key[1][index];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

// Функция для расшифрования текста
function decrypt(text, key) {
    var decryptedText = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var index = key[1].indexOf(char);
        if (index !== -1) {
            decryptedText += key[0][index];
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

// Параметры ключа
var A0 = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
var A1 = "ЯТЭЖМРЩЫФКЬЧХАВДСИЦГЕЗПНЛЪШБУЮ";

// Создаем массивы ключей
var key = [A0, A1];

// Текст для шифрования и расшифрования
var plaintext = "КОДИРОВАНИЕ";

// Шифруем текст
var ciphertext = encrypt(plaintext, key);
console.log("Зашифрованный текст:", ciphertext);

// Расшифровываем текст
var decryptedText = decrypt(ciphertext, key);
console.log("Расшифрованный текст:", decryptedText);
