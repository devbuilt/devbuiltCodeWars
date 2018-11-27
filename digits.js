//Largest 5 digit number in a series

function solution(digits) {

    if (digits.length <= 5) { return digits; }

    let largestFive = digits.slice(0, 5); // remove largest five digits

    for (let i = 5; i < digits.length; i++) { // loop 

        let currentFive = digits.slice(i, i + 5)

        if (currentFive > largestFive) {
            largestFive = currentFive
        }

    }
    return Number(largestFive)
}

console.log(solution("actual", "expect", "This is just an example of how you can write your own TDD tests"))