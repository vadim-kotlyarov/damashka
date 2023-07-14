//1
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function returnPromise (number) {
    return new Promise (resolve => {
        const time = getRandomNumber(1, 5);
        setTimeout (() => {
            resolve(number);
        }, time * 1000)
    })
}

const promise1 = returnPromise (1);
const promise2 = returnPromise (2);
const promise3 = returnPromise (3);

Promise.race([promise1, promise2, promise3])
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
    

//2
function getNum (min, max, time) {
    return new Promise (resolve => {
        setTimeout (() => {
            const number = getRandomNumber(min, max)
            resolve (number);
        }, time);
    })
}
async function asynch() {
    let num = await getNum (1, 5, 3000);
    let power = await Math.pow(num , 2);
    console.log(power);
}
asynch ();

//3
async function asynch2() {
    let num1 = await getNum (1, 5, 3000);
    let num2 = await getNum (6, 10, 5000);
    console.log(num1 + num2);
}
asynch2 ();