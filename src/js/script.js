const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  //   const inputs = [];
  //   const quotients = [];
  //   const remainders = [];
  //   if (input == 0) {
  //     result.innerText = "0";
  //     return;
  //   }
  //   while (input > 0) {
  //     const quotient = Math.floor(input / 2);
  //     const remainder = input % 2;
  //     inputs.push(input);
  //     quotients.push(quotient);
  //     remainders.push(remainder);
  //     input = quotient;
  //   }
  //   console.log("Inputs: ", inputs);
  //   console.log("Quotients: ", quotients);
  //   console.log("Remainders: ", remainders);
  //   result.innerText = remainders.reverse().join("");
  // спрощення функції

  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }
  if (inputInt === 5) {
    showAnimation();
    return;
  }
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkUserInput();
  }
});
