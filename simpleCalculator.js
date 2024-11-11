const { error } = require('console');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function performCalculator(a, b, operator) {
    switch (operator) {
        case "+":
            console.log("Addition = " + (a + b));
            break;
        case "-":
            console.log("Subtraction = " + (a - b));
            break;
        case "*":
            console.log("Multiplication = " + (a * b));
            break;
        case "/":
            {
                try {
                    if (b === 0) {
                        throw new Error("Denominator should not be zero.");
                    }
                    console.log("Division = " + (a / b));
                } catch (error) {
                    console.error(error.message);
                }
                break;
            }
        case "%":
            console.log("Modulus = " + (a % b));
            break;
        default:
            console.log("Invalid Operator. Please use +,-,*,/ or % operator.");
    }
}

r1.question("Enter the first number : ", (firstNum) => {
    const a = parseFloat(firstNum);

    r1.question("Enter the second number : ", (secondNum) => {
        const b = parseFloat(secondNum);

        r1.question("Enter the operator (+,-,*,/,%) : ", (operator) => {
            performCalculator(a, b, operator);

            r1.close();
        });

    });
});