function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

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

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}