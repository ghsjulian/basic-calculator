// Select all the buttons
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const output = document.getElementById("output");

buttons.forEach(button => {
    const btnValue = button.textContent;
    button.onclick = () => {
        if (btnValue === "C") {
            if (result.value !== "") {
                result.value = "";
                output.textContent = "";
            }
        }
        if (btnValue === "x") {
            if (result.value !== "") {
                result.value = result.value.slice(0, result.value.length - 1);
            }
        } else if (btnValue === "=") {
            if (result.value !== "") {
                output.textContent = "= " + eval(result.value);
            }
        } else {
            if(btnValue !== "C"){
            result.value += btnValue;
            }
        }
    };
});
