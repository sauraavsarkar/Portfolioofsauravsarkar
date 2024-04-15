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
        SecureToken: "5924ca43-f20b-4a91-89ec-f49a7031f540",
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
