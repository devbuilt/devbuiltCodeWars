//Largest 5 digit number in a series

function solution(digits) {
    if (digits.length <= 5) {return digits;}
    
    let largestFiveDigitNumber = digits.slice(0, 5);

    for (let i = 5; i < digits.length; i++) {

        let currentFiveDigitNumber = digits.slice(i, i + 5);

        if (currentFiveDigitNumber > largestFiveDigitNumber) {
            largestFiveDigitNumber = currentFiveDigitNumber;
        }
    }
    return Number(largestFiveDigitNumber);
}

console.log(solution("actual", "expected", "This is just an example of how you can write your own TDD tests"))