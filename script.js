var cardNumberInput = document.getElementById('cardNumber');

cardNumberInput.addEventListener('input', function() {
  var cardNumber = this.value.trim();
  if (cardNumber.length > 16) {
    cardNumber = cardNumber.slice(0, 16);
  }
  
  document.querySelector('.card-box .number').textContent = cardNumber;
});

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


/// Luhn algorithm function:

function validateCardNumber(cardNumber) {
  var cleanNumber = cardNumber.replace(/\D/g, ''); // Remove non-digit characters
  var reversedNumber = cleanNumber.split('').reverse().join('');
  var sum = 0;

  for (var i = 0; i < reversedNumber.length; i++) {
    var digit = parseInt(reversedNumber[i], 10);

    if (i % 2 === 1) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}