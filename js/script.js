// Random Number Related functionalities
const randomInput = document.querySelector("#randomInput");
randomInput.addEventListener("click", () => {
    const randonNumber = Math.floor(1000 + Math.random() * 9000);
    document.querySelector("#randomOutput").value = randonNumber;
});

// Calculator Number pad and input value function
const numberPad = (value) => {
    document.querySelector("#numberDisplay").value += value;
};

// All clear function
const clearAll = (value) => {
    document.querySelector("#numberDisplay").value = value;
};

// Back Space function
const backSpace = () => {
    const input = document.querySelector("#numberDisplay");
    let inputValue = input.value;
    inputValue = inputValue.substring(0, inputValue.length - 1);
    input.value = inputValue;
};


// Pin matcher submit related functionalities
const matchingSubmit = document.querySelector("#matchingSubmit");
matchingSubmit.addEventListener("click", () => {
    const randomOutput = document.querySelector("#randomOutput");
    const numberDisplay = document.querySelector("#numberDisplay");
    if (randomOutput.value === numberDisplay.value && numberDisplay.value !== "") {
        document.querySelector(".notify-section #notify2").style.display = "block";
        document.querySelector(".input-section").style.display = "none";
        document.querySelector(".pin-generator").style.display = "none";
    } else {
        document.querySelector(".notify-section #notify1").style.display = "block";
    }
});