function validateForm() {
    // Get the values from the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Validate Name (non-empty)
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (phone === "") {
        alert("Please enter your phone.");
        return false;
    }
    if (subject === "") {
        alert("Please enter your subject.");
        return false;
    }
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all validations pass, the form can be submitted
    return true;
}

function isValidEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}