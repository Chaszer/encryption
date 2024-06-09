function encryption(text, key1, key2) {
    const dict = {
        'А': 'Я', 'Б': 'Т', 'В': 'Э', 'Г': 'Ж', 'Д': 'М', 'Е': 'Р', 'Ж': 'Щ', 'З': 'Ы', 'И': 'Ф', 'К': 'К',
        'Л': 'Ь', 'М': 'Ч', 'Н': 'Х', 'О': 'А', 'П': 'В', 'Р': 'Д', 'С': 'С', 'Т': 'И', 'У': 'Ц', 'Ф': 'Г',
        'Х': 'Е', 'Ц': 'З', 'Ч': 'П', 'Ш': 'Н', 'Щ': 'Л', 'Ъ': 'Ъ', 'Ы': 'Ш', 'Ь': 'Б', 'Э': 'У', 'Ю': 'Ю',
        'Я': 'Й'
    };

    text = text.toUpperCase();
    let result = '';

    for (let char of text) {
        result += dict[char] || char;
    }

    return result;
}

function decryption(text, key1, key2) {
    const dict = {
        'Я': 'А', 'Т': 'Б', 'Э': 'В', 'Ж': 'Г', 'М': 'Д', 'Р': 'Е', 'Щ': 'Ж', 'Ы': 'З', 'Ф': 'И', 'К': 'К',
        'Ь': 'Л', 'Ч': 'М', 'Х': 'Н', 'А': 'О', 'В': 'П', 'Д': 'Р', 'С': 'С', 'И': 'Т', 'Ц': 'У', 'Г': 'Ф',
        'Е': 'Х', 'З': 'Ц', 'П': 'Ч', 'Н': 'Ш', 'Л': 'Щ', 'Ъ': 'Ъ', 'Ш': 'Ы', 'Б': 'Ь', 'У': 'Э', 'Ю': 'Ю',
        'Й': 'Я'
    };

    text = text.toUpperCase();
    let result = '';

    for (let char of text) {
        result += dict[char] || char;
    }

    return result;
}

// Пример использования
const plaintext = "КОДИРОВАНИЕ";

// Ключи
const key1 = 5;
const key2 = 10;

const ciphertext = encryption(plaintext, key1, key2);
console.log("Зашифрованный текст:", ciphertext);

const decryptionText = decryption(ciphertext, key1, key2);
console.log("Расшифрованный текст:", decryptionText);
