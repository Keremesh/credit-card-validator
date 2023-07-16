document.getElementById("validateBtn").addEventListener("click", function() {
  let cardNumber = document.getElementById("cardNumber").value;
  let isValid = validateCardNumber(cardNumber);
  let resultElement = document.getElementById("result");

  if (isValid) {
    resultElement.textContent = "Card number is valid.";
    resultElement.className = "success-message";
  } else {
    resultElement.textContent = "Card number is invalid.";
    resultElement.className = "error-message";
  }
});


/// Luhn algorithm functions:

const validateCardNumber = (cardNumber) => {
  const last = cardNumber[cardNumber.length - 1]
  const newArr = cardNumber.slice(0, -1).reverse()
    let total = 0;
    for(let i = 0; i < newArr.length; i++){
      if(i % 2 == 0){
        let multi = newArr[i]*2;
        if(multi > 9) {
          multi -= 9
        } 
        total += multi;
      } else {
        total += newArr[i];
      }
  }
  total += last   
  return total % 10 === 0;
};