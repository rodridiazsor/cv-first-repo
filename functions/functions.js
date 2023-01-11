
document.getElementById('leave-details').addEventListener('click', function () {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('leave-details').style.display = 'none';
    document.getElementById('submit').addEventListener('click', function ValidateEmail() {

        console.log('Check if Name and Email are in correct format');
        const FullNameRegex = new RegExp(/^[a-zA-Z]/, "gm");
        const emailRegex = new RegExp(/^[A-Za-z0-9.-]+@[A-Za-z0-9.-]+$/, "gm");

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        console.log("Full Name is: " + name)
        console.log("Email is: " + email)

        const isValidName = FullNameRegex.test(name);
        const isValidEmail = emailRegex.test(email);

        console.log(+isValidName)
        console.log(+isValidEmail)

        if (isValidName & isValidEmail & name.lenght !== 0) {
            alert("Form Submitted Correctly")
            document.getElementById('thank-you').style.display = 'block';
            document.getElementById('leave-details').style.display = 'none';
            document.getElementById('form-container').style.display = 'none';

        }
        else {
            if (isValidName == 0) { document.getElementById('name').style.color = 'red'};
            if (isValidEmail == 0) { document.getElementById('email').style.color = 'red' };
            alert("Please check values in the form")
        }
    });
});
