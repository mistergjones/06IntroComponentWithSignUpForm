console.log("Hello");

function checkFields() {
    // obtain the various text in each input field
    var firstName = document.getElementById("inputFirstname").value;
    var lastName = document.getElementById("inputLastname").value;
    var emailAddress = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    console.log(firstName);

    if (firstName.length == 0) {
        //create an element
        var tag = document.createElement("p");
        var text = document.createTextNode("Firstname cannot be blank");
        tag.appendChild(text);
        var element = document.getElementById("form-header");
        element.appendChild(tag);
        document.getElementById("inputFirstname").placeholder = "XXXXXXXXX";

        alert("Firstname cannot be blank");
    }

    if (lastName.length == 0) {
        alert("Last Name cannot be blank");
    }
    if (emailAddress.length == 0) {
        alert("Email Address  cannot be blank");
    }
    if (password.length == 0) {
        alert("Password cannot be blank");
    }

    let validEmail = validateEmail(emailAddress);
    if (!validEmail) {
        alert("Invalid Email Address");
    }
}

//check for valid email address via regex
const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
};
