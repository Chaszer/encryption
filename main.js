const p = 2;
console.log('Ваше первое "p" число = ' + p);

const q = 13;
console.log('Ваше второе "q" число = ' + q);

const n = p * q;
console.log('n = ' + n);

const fn = (p - 1) * (q - 1);
console.log("Эйлера fn = " + fn);
const e = 7;
console.log('e = ' + e)
console.log('     ')

console.log('НОД, нахождение "e" и проверка')
function NOD(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Функция для проверки, является ли число простым
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Проверка, является ли 'e' взаимно простым с 'fn'
function checkCoprime(e, fn) {
    const nodResult = NOD(e, fn);
    if (nodResult !== 1) {
        console.log(`Значение ${e} не подходит, так как НОД(e, φ(n)) не равен 1.`);
        return false;
    }
    return true;
}

console.log('Проверка e = ' + e + ' на простое число и не превышающее φ(n) = ' + fn);

// Проверка значения 'e'
if (e <= fn && isPrime(e) && checkCoprime(e, fn)) {
    console.log(`Значение ${e} является простым числом, не превышает φ(n) = ${fn}, и взаимно просто с φ(n).`);
} else {
    console.log(`Значение ${e} либо не является простым числом, либо превышает φ(n) = ${fn}, либо не взаимно просто с φ(n).`);
}
console.log('     ')

console.log('Продвинутый алгорит Евклида')
// Функция для вычисления NOD и коэффициентов расширенного алгоритма Евклида
function extendedEvklida(a, b) {
    let old_r = a, r = b;
    let old_s = 1, s = 0;
    let old_t = 0, t = 1;

    while (r !== 0) {
        let quotient = Math.floor(old_r / r);
        [old_r, r] = [r, old_r - quotient * r];
        [old_s, s] = [s, old_s - quotient * s];
        [old_t, t] = [t, old_t - quotient * t];
    }

    return [old_r, old_s, old_t]; // [NOD, x, y]
}

// Функция для нахождения мультипликативной обратной
function modInverse(e, fn) {
    const [NOD, x, y] = extendedEvklida(e, fn);
    if (NOD !== 1) {
        throw new Error("Обратный элемент не существует.");
    } else {
        return (x % fn + fn) % fn; // Убедиться, что обратный элемент положительный
    }
}

try {
    const d = modInverse(e, fn);
    console.log(`Значение d для e = ${e} и φ(n) = ${fn} это: ${d}`);
} catch (error) {
    console.error(error.message);
}
console.log('     ')

console.log('Ниже проверка на простые числа')
// Проверка значений на простое число
const primeNumbers = (num)=>{
    if (num <= 1) {
        console.log(num + " не является простым числом.");
        return false;
    }
    if (num <= 3) {
        console.log(num + " является простым числом.");
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        console.log(num + " не является простым числом.");
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            console.log(num + " не является простым числом.");
            return false;
        }
        i += 6;
    }
    console.log(num + " является простым числом.");
    return true;
}
console.log(primeNumbers(e))
