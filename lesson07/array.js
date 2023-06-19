//1
const array = [1, 2, 3, 4, 5, 6];
function myReverse (array) {
    return array.reverse ();
};
let result = myReverse (array);
//console.log (result);

//2
const array2 = [3, 67, 15];
function getMaxOfArray (array2) {
    return Math.max.apply (null, array2)
};
//console.log (getMaxOfArray (array2));

//3
let m = 15
let n = 8
function returnArrayFibonachi (startNamber, arrayLength) {
    const fibonachi = [0, 1];
    fibonachi.length = arrayLength + startNamber
    for (i = 2; i < fibonachi.length; i++) {
        fibonachi [i] = fibonachi [i-1] + fibonachi [i-2];
    }
   return (fibonachi.slice (startNamber, fibonachi.length));
}
let result3 = returnArrayFibonachi (n, m);
//console.log (result3);

//4
const num1 = 3487;
const num2 = 3794;
function countIntersection (number1, number2) {
    const arrayOfDigits1 = Array.from (String (number1), Number);
    const arrayOfDigits2 = Array.from (String (number2), Number);
    let intersectionArray = arrayOfDigits1.filter((item) => arrayOfDigits2.includes (item));
    return intersectionArray.length
}
let result4 = countIntersection (num1, num2)
//console.log (result4);

function strictCountIntersection (number1, number2) {
    const arrayOfDigits1 = Array.from (String (number1), Number);
    const arrayOfDigits2 = Array.from (String (number2), Number);
    let count = 0;
    let minArrayLenght = arrayOfDigits1.lenght >= arrayOfDigits2.length ? arrayOfDigits2.length : arrayOfDigits1.length;
    for (let i = 0; i < minArrayLenght; i++) {
        if (arrayOfDigits1 [i] === arrayOfDigits2 [i]) {
            count++;
        }
    }
    return count;
}
let newResult4 = strictCountIntersection (num1, num2)
// console.log (newResult4);

//5
const array5 = [4, 7, 3, 8];
function getSortMinMax (array) {
    return array.sort (function (a, b) {
        return a - b;
    });
}
let result5 = getSortMinMax (array5);
// console.log (result5);
function getSortMaxMin (array) {
    return array.sort (function (a, b) {
        return b - a;
    });
}
let newResult5 = getSortMaxMin (array5);
// console.log (newResult5);

//6
const array6 = [4, 7, 3, 8, 7, 4];
function deleteDuplicates (array) {
    const newArray = array.filter((element, index) => {
        return array.indexOf (element) === index;
    });
    return newArray;
}
let result6 = deleteDuplicates (array6);

// console.log (result6);
