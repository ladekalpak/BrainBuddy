// Password confirmation check
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let message = document.getElementById("passwordMessage");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
  } else {
    message.textContent = "Passwords match ✅";
    message.style.color = "green";
    alert("Form submitted successfully!");
    this.submit();
  }
});
// Open Popup
function openForm() {
  document.getElementById("registrationPopup").style.display = "flex";
}

// Close Popup
function closeForm() {
  document.getElementById("registrationPopup").style.display = "none";
}

// Password Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let message = document.getElementById("passwordMessage");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
  } else {
    message.textContent = "Passwords match ✅";
    message.style.color = "green";
    alert("Form submitted successfully!");
    closeForm(); // Auto close after successful submit
  }
});
