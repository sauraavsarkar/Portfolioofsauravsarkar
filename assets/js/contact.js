
function Send(){

      
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;

    var sub = document.getElementById("subject").value;
    var mess = document.getElementById("message").value;

    var body = "Name: " + name + "<br/> Email:" + email + "<br/> Message:" + mess;
     
    console.log(body);
     Email.send({
      SecureToken : "5924ca43-f20b-4a91-89ec-f49a7031f540",
      To : 'ovi.raj54@gmail.com',
      From : "ovi.raj54@gmail.com",
      Subject : sub,
      Body : body
     }).then(
         message =>{
             if(message=='OK'){

                 swal("Successfull", "Your message Successfull Received", "success");
             }
             else{

                 swal("Something Wrong", "Your Data is not Received", "error");
             }
         }
       );
 }

