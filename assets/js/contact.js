function Send(){
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var sub = document.getElementById("subject").value;
    var mess = document.getElementById("message").value;

    // Check if any of the fields are empty
    if (name === '' || email === '' || sub === '' || mess === '') {
        swal("Error", "Please fill out all fields", "error");
        return; // Stop execution if any field is empty
    }

    var body = "Name: " + name + "<br/> Email:" + email + "<br/> Message:" + mess;

    // Proceed with sending the email if all fields are filled
    Email.send({
        SecureToken: "1ec8de68-c2ed-43f4-9f02-e673c77f74dd",
        To: 'ovi.raj54@gmail.com',
        From: "ovi.raj54@gmail.com",
        Subject: sub,
        Body: body
    }).then(
        message => {
            if (message === 'OK') {
                swal("Success", "Your data has been successfully received", "success");
            } else {
                swal("Error", "Something went wrong. Your data was not received", "error");
            }
        }
    );
}
