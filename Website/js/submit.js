$(document).ready(function(e) {
$('input[type*=submit]').click(function() {
var sEmail = $('#email').val();
var fieldText= "<center><br>Please fill in the form correctly.</center";
var mailText= "<center><br>Please use a valid Email address.</center>";
// Checking Empty Fields
if ($.trim(sEmail).length == 0 || $("#fname").val()=="" || $("#lname").val()=="") {
$('.container div').remove();
$('.container').append("<div>"+fieldText+"</div>");
    e.preventDefault();
}
if (validateEmail(sEmail)) {
$('.container').html("Thank you for contacting me, I will be in touch with you shortly.")
        .addClass("submit");
}
else {
$('.container div').remove();
$('.container').append("<div>"+mailText+"</div>");
e.preventDefault();
}
});
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
if (filter.test(sEmail)) {
return true;
}
else {
return false;
}
}