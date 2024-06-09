// Функция для вычисления НОД (наибольшего общего делителя)
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// Функция для нахождения мультипликативного обратного по модулю
function modInverse(e, phi) {
    let [t, newT] = [0, 1];
    let [r, newR] = [phi, e];

    while (newR !== 0) {
        const quotient = Math.floor(r / newR);
        [t, newT] = [newT, t - quotient * newT];
        [r, newR] = [newR, r - quotient * newR];
    }

    if (r > 1) return NaN; // e не имеет обратного по модулю phi
    if (t < 0) t = t + phi;

    return t;
}

// Функция для возведения в степень по модулю
function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;

    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
}

// Функция для шифрования сообщения
function encrypt(message, n, e) {
    return modPow(message, e, n);
}

// Функция для расшифрования сообщения
function decrypt(encryptedMessage, n, d) {
    return modPow(encryptedMessage, d, n);
}

// Функция для выбора значения e
function findE(phi) {
    for (let e = 2; e < phi; e++) {
        if (gcd(e, phi) === 1) {
            return e;
        }
    }
    return NaN; // Если не найдено подходящее e, возвращаем NaN
}

// Алфавит
const alphabet = {
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5,
    'е': 6, 'ё': 7, 'ж': 8, 'з': 9, 'и': 10,
    'й': 11, 'к': 12, 'л': 13, 'м': 14, 'н': 15,
    'о': 16, 'п': 17, 'р': 18, 'с': 19, 'т': 20,
    'у': 21, 'ф': 22, 'х': 23, 'ц': 24, 'ч': 25,
};
const reverseAlphabet = Object.entries(alphabet).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

// Ввод значений p и q
const p = 31; // Пример простого числа
const q = 11; // Пример простого числа
const n = p * q;
const phi = (p - 1) * (q - 1);
const e = findE(phi);
const d = modInverse(e, phi);

// Проверка правильности нахождения d
if (isNaN(d)) {
    throw new Error("Не удалось найти мультипликативный обратный для e. Попробуйте другие простые числа p и q.");
}

// Пример работы пользователя В
function userB(message) {
    // Шифруем сообщение
    const encryptedMessage = message.map(m => encrypt(m, n, e));
    console.log("Encrypted message:", encryptedMessage);

    // Переводим зашифрованные числа в буквы для демонстрации
    const encryptedText = encryptedMessage.map(m => reverseAlphabet[m] || '?').join('');

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

    // Выводим индексы оригинального текста

    return decryptedMessage;
}

// Вводим свое сообщение
const yourMessage = "абвгдеёжзийклмнопрстуфхцч";
const messageCodes = yourMessage.split("").map(char => alphabet[char]);

// Выводим оригинальный текст
console.log("Original text:", yourMessage);

// Выводим индексы оригинального текста
console.log("Original text indexes:", messageCodes);

// Выполняем пример работы пользователей
const encryptedMessage = userB(messageCodes);
userA(encryptedMessage);

// Вывод значений
console.log('p = ' + p);
console.log('q = ' + q);
console.log('n = ' + n);
console.log('phi = ' + phi);
console.log('e = ' + e);
console.log('d = ' + d);
