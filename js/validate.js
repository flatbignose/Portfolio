function validateForm() {
  var email = document.frm.email.value;
  var name = document.frm.name.value;
  var subject = document.frm.subject.value;
  var message = document.frm.message.value;
  var respose = document.getElementById("res");
  var success = document.getElementById("sres");

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
  success.innerHTML = "Email Sent Successfully"
}