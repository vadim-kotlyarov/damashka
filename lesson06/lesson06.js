//1
const user1 = [];
const user2 = [];
function getRandomInt () {
    return Math.floor (Math.random () * 6) + 1;
}

for (let i = 0; i < 3; i++) {
    user1 [i] = getRandomInt ();
    user2 [i] = getRandomInt ();
    }

let sumUser1 = user1.reduce (function (a, b) {
    return a + b;
});

let sumUser2 = user2.reduce (function (a, b) {
    return a + b;
});

if (sumUser1 > sumUser2) {
    console.log ('user1 - win!');
} else if (sumUser2 > sumUser1) {
    console.log ('user2 - win!');
} else {
    console.log ('ничья!!!');
}

//2
const end = new Date(Date.UTC(2023, 5, 28));
const start = new Date(Date.UTC(2000, 0, 1));
function numberOfFridaythe13thsIn(start, end) {
    let startDate = start.getDate();
    let startDay = start.getDay();
    for (let i = 0; i < 7; i++) {
       if(startDay + i == 5 || startDay + i == 12) {
        start.setDate(startDate + i);
        break;
       }
    }
const elapsed = Math.round(Math.ceil((end.getTime() - start.getTime())/(1000*60*60*24*7)));
    let count = 0;
    for (let i = 0; i < elapsed; i++) {
        start.setDate(start.getDate() + 7);
        if(start.getDate() == 13){
          count++;
       }
    }
    return console.log(count);                           
}
numberOfFridaythe13thsIn(start, end);


//3

const array = [];
function breaksNumber (number, numberOfParts) {
    function getRandomInt (number) {
        return Math.floor (Math.random () * number) + 1;
    }
        for (let i = 0; i < numberOfParts; i++) {
            array [i] = getRandomInt (number);
            number = number - array [i];
            }
        let sumArray = array.reduce (function (a, b) {
             return a + b;
        });
        if (sumArray < number) {
            array [0] = array [0] + 1;
        }
        if (sumArray > number) {
            array [0] = array [0] - 1;
        }
        return console.log(array);
}
breaksNumber(15, 4);

const newArray = [];
function breaksNumberOnFractionalNumber  (number, numberOfParts) {
    function getRandomInt (number) {
        return (Math.random () * number + 1).toFixed(2);
    }
    let firstNamber = number;
        for (let i = 0; i < numberOfParts; i++) {
            newArray [i] = Number(getRandomInt (number));
            number = number - newArray [i];
            }
        let sumNewArray = newArray.reduce (function (a, b) {
             return a + b;
        });
        if (sumNewArray < firstNamber) {
            newArray [0] = (newArray [0] + (firstNamber - sumNewArray)).toFixed(2);
            newArray [0] = Number(newArray [0]);
        }
        if (sumNewArray > firstNamber) {
            newArray [0] = (newArray [0] - (sumNewArray - firstNamber)).toFixed(2);
            newArray [0] = Number(newArray [0]);
        }
        return console.log(newArray);
}
breaksNumberOnFractionalNumber(15, 3);
