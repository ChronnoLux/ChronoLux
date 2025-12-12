document.getElementById("payment-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const cardNumber = document.getElementById("card-number").value;
  const expDate = document.getElementById("exp-date").value;
  const cvv = document.getElementById("cvv").value;

  if (!name || !email || !address || !cardNumber || !expDate || !cvv) {
    alert("Please fill out all fields.");
    return;
  }

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert("Card number must be 16 digits.");
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("CVV must be 3 digits.");
    return;
  }

  const paymentData = {
    name,
    email,
    address,
    cardNumber,
    expDate,
    cvv,
    date: new Date().toISOString()
  };

  let payments = JSON.parse(localStorage.getItem("paymentRecords")) || [];
  payments.push(paymentData);
  localStorage.setItem("paymentRecords", JSON.stringify(payments));

  alert("Payment Successful!");

  localStorage.removeItem("cartItems");

  window.location.href = "DM-Watches.html";
});
