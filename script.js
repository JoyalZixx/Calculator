//calculator
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "C") {
            currentInput = "";
        } else if (buttonText === "=") {
            try {
                currentInput = eval(currentInput) || "";
            } catch {
                currentInput = "Error";
            }
        } else {
            currentInput += buttonText;
        }

        display.textContent = currentInput;
    });
});
