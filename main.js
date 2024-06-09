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

// Алфавит
const alphabet = {
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5,
    'е': 6, 'ё': 7, 'ж': 8, 'з': 9, 'и': 10,
    'й': 11, 'к': 12, 'л': 13, 'м': 14, 'н': 15,
    'о': 16, 'п': 17, 'р': 18, 'с': 19, 'т': 20,
    'у': 21, 'ф': 22, 'х': 23, 'ц': 24, 'ч': 25,
    'ш': 26, 'щ': 27, 'ъ': 28, 'ы': 29, 'ь': 30,
    'э': 31, 'ю': 32, 'я': 33
};
const reverseAlphabet = Object.entries(alphabet).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

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

    // Переводим зашифрованные числа в буквы для демонстрации
    const encryptedText = encryptedMessage.map(m => reverseAlphabet[m] || '?').join('');
    console.log("Encrypted text:", encryptedText);

    // Отправляем сообщение пользователю А
    return encryptedMessage;
}

// Пример работы пользователя А
function userA(encryptedMessage) {
    // Расшифровываем полученное сообщение
    const decryptedMessage = encryptedMessage.map(m => decrypt(m, n, d));
    console.log("Decrypted message:", decryptedMessage);

    // Переводим расшифрованные числа в буквы
    const originalMessage = decryptedMessage.map(m => reverseAlphabet[m]);
    console.log("Original message:", originalMessage.join(""));
    return decryptedMessage;
}

// Вводим свое сообщение
const yourMessage = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const messageCodes = yourMessage.split("").map(char => alphabet[char]);

// Выполняем пример работы пользователей
const encryptedMessage = userB(messageCodes);
userA(encryptedMessage);
