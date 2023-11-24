// _(1)________________________________________________________________________________________________________________________________________________________________
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
console.log("(1) Sentence")
const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2); // [5,3,4,6,7]

// function compact(array) {
//     const storage = [];
//     for (let i = 0; i < array.length; i++) {
//         let numberQuantity = 0;
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 numberQuantity++;
//             }
//         }
//         if (numberQuantity >= 2) {
//            storage.push(array[i]);
//         }
//     }
//     return storage;
// }

function compact(array) {
    const storage = [];
    let iterationNumber = 0;
    for (let i = 0; i < array.length; i++) {
        iterationNumber = array[i];
        if (!storage.includes(iterationNumber)) {
            storage.push(iterationNumber);
        }
    }
    return storage;
}

//_(2)________________________________________________________________________________________________________________________________________________________________
//Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення та кінцеве значення,
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями).
console.log("(2) Sentence")

let arrResult = createArray(2, 9);
console.log(arrResult); // [2,3,4,5,6,7,8,9]

function createArray(start, end) {
    const storage = [];
    for (let i = start; i <= end; i++) {
        storage.push(i);
    }
    return storage;
}

//_(3)________________________________________________________________________________________________________________________________________________________________
//Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится один раз, число а+1 - два рази і т.д.
console.log("(3) Sentence")

function multipliedNumberDiapason(a, b) {
    const result = [];
    let num = 0;
    for (let i = a; i <= b; i++) {
        for (let j = 0; j <= num; j++) {
            result.push(i);
        }
        num++;
    }
    return result;
}

let arrOutput = multipliedNumberDiapason(2, 5);
console.log(arrOutput);

//_(4)________________________________________________________________________________________________________________________________________________________________
//Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
console.log("(4) Sentence")

const k = [];
for (let i = 0; i <= 500; i++) {
    k.push(i);
}
console.log(k);

function randArray(k) {
    return Math.floor(Math.random() * (k.length + 1));
}

console.log("Random number: " + randArray(k));

//_(5)________________________________________________________________________________________________________________________________________________________________
//Є масив arr, який може містити підмасиви, написати функцію showByTypes яка виведе у консоль масиви які складаються
// із примітивних даних початкового масиву і усіх вкладених масивів, але одного типу даних
// (не приводити тип String в Number навіть, якщо там лише число).
console.log("(5) Sentence")

// [5, 12, 99, 2, 2, 4, 3]
// ["Limit", "a", "3", "33", "a", "text", "strong", "broun"]
// */

let regularArr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
console.log(regularArr);
console.log(showByTypes(regularArr));

function showByTypes(array) {
    const numbersArr = [];
    const stringArr = [];
    for (let i = 0; i < array.length; i++) {
        let type = typeOfValue(array[i]);
        // console.log(type);
        if (type === "number") {
            numbersArr.push(array[i]);
        } else if (type === "string") {
            stringArr.push(array[i]);
        } else if (type === "object") {
            for (let j = 0; j < array[i].length; j++) {
                let objectType = typeOfValue(array[i][j]);
                // console.log(objectType);
                if (objectType === "number") {
                    numbersArr.push(array[i][j]);
                } else if (objectType === "string") {
                    stringArr.push(array[i][j]);
                }
            }
        }
    }
    function typeOfValue(value) {
        return typeof value;
    }
    return console.log(numbersArr, stringArr)
}

//_(6)________________________________________________________________________________________________________________________________________________________________
//Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає
// її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
//console.log(calc(5, 2, 2)) //10
console.log("(6) Sentence")

function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;
    }
}

console.log(calc(5, 2, 7)) //10

//_(7)________________________________________________________________________________________________________________________________________________________________
//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
//findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
console.log("(7) Sentence")

const numbers = [1, 2, 3, 5, 11, 5];

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        let storage = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                storage++;
            }
        }
        if (storage >= 2) {
            return false;
        }
    }
    return true;
}

const calcRes = findUnique(numbers);
console.log(calcRes);





















