function rentalCarCost(d) {
    // Your solution here
    if (d >= 7) {
        return (d * 40 - 50);
    } else if (d > 7 ) {
        return (d * 40 - 70);
    }

}

console.log(rentalCarCost(3), 100)