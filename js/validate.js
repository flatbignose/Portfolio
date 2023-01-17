function validateForm() {
  var name = document.frm.name.value;
  var email = document.frm.email.value;
  var subject = document.frm.subject.value;
  var message = document.frm.message.value;
  var respose = document.getElementById("res");

  var mailformat = /^[a-zA-Z]\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/gm;
  if (mailformat.test(email) == false) {
    respose.innerHTML = "Enter a valid Email !"
    return false;
  }
  if (name.length < 4) {
    respose.innerHTML = "Name Should Contain atleast 4 Characters"
    return false;
  }
  if (subject.length < 5) {
    respose.innerHTML = "Your Subject is too small"
    return false;
  }
  if (message.length < 10) {
    respose.innerHTML = "Your Message is too small (atleast 10 Letters) !"
    return false;
  }
  return true;

}
$("#submit-form").submit((e)=>{

e.preventDefault()
var a=validateForm()
if(a){
  $.ajax({

    url:"https://script.google.com/macros/s/AKfycbxUIzLJxm3kEDj7kIMPVUL4xrlU3qknt3QlCPvk2idVNc-Jt-3vP9t24PPHoffVUmsbCg/exec",
    data:$("#submit-form").serialize(),
    method:"post",
    success:function (response){

        alert("form submitted successfully"),
        window.location.reload()
        //window.location.href="http://google.com"

    },
    error:function (err){

        alert("Something Error")

    },

})

}

})

