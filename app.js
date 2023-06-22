// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if(count < 0) {
        console.log ("Invalid number. Please provide a positive number.")
            return;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
// printOdds(72) 
// printOdds(48)

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){

    if(!userName || !age) {
        console.log("Please provide name and an age!")
        return;
    }
    
    let aboveSixteen = "Congrats ${userName}, you can drive!";
    let belowSixteen = "Sorry ${userName}, but you need to wait until you're 16.";

    if (age < 16) {
        console.log(belowSixteen);
    }
    else {
        console.log(aboveSixteen);
    }
}

// checkAge("Seth", 15)

function checkQuadrant(x, y) {
    if(x === 0 && y === 0) {
        console.log("This point is at the origin")
    }
    else if(x === 0) {
        console.log(`${x}, ${y} is on the y axis`)
    }
    else if(y === 0) {
        console.log(`${x}, ${y} is on the x axis`)
    }
    else if(x > 0 && y > 0) {
        console.log("Quadrant 1")
    }
    else if(x < 0 && y > 0) {
        console.log("Quadrant 2")
    }
    else if(x < 0 && y < 0) {
        console.log("Quadrant 3")
    }
    else {
        console.log("Quandrant 4")
    }
}

checkQuadrant(1, 2)
