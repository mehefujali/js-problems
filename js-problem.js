function getLargestNum(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1
    }
    else if (num2 > num1 && num2 > num3) {
        return num2
    }
    else {
        return num3
    }
}

const num1 = 56;
const num2 = 45;
const num3 = 64;



let theLargeNumber = getLargestNum(num1, num2, num3)
console.log('the largest numbeer is', theLargeNumber);
