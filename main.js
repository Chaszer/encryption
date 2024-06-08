// Функция для вычисления НОД (наибольшего общего делителя)
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// Функция для нахождения мультипликативного обратного по модулю
function modInverse(e, phi) {
    let d;
    for (d = 2; d < phi; d++) {
        if ((e * d) % phi === 1) {
            return d;
        }
    }
    return NaN; // Если не найдено мультипликативного обратного, возвращаем NaN
}

// Функция для шифрования сообщения
function encrypt(message, n, e) {
    return (message ** e) % n;
}

// Функция для расшифрования сообщения
function decrypt(encryptedMessage, n, d) {
    return (encryptedMessage ** d) % n;
}

// Параметры RSA
const p = 3;
const q = 11;
const n = p * q;
const phi = (p - 1) * (q - 1);
const e = 7;
const d = modInverse(e, phi);

// Пример работы пользователя В
function userB(message) {
    // Шифруем сообщение
    const encryptedMessage = message.map(m => encrypt(m, n, e));
    console.log("Encrypted message:", encryptedMessage);

    // Отправляем сообщение пользователю А
    return encryptedMessage;
}

// Пример работы пользователя А
function userA(encryptedMessage) {
    // Расшифровываем полученное сообщение
    const decryptedMessage = encryptedMessage.map(m => decrypt(m, n, d));
    console.log("Decrypted message:", decryptedMessage);

    // Переводим расшифрованные числа в буквы
    const originalMessage = decryptedMessage.map(m => String.fromCharCode(m));
    console.log("Original message:", originalMessage.join(""));
    return decryptedMessage;
}

// Вводим свое сообщение
const yourMessage = "watch";
const messageCodes = yourMessage.split("").map(char => char.charCodeAt(0));

// Выполняем пример работы пользователей
const encryptedMessage = userB(messageCodes);
userA(encryptedMessage);
