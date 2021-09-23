var mail=document.getElementById("inputEmail3");
var error=document.getElementById("error");
var pass=document.getElementById("InputPassword3")
var perror=document.getElementById("errorr");

 function validate(){
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/; 
     if(regexp.test(mail.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        var strongRegex = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
        if(strongRegex.test(pass.value)){
            perror.innerHTML="Valid";
            perror.style.color="green";
        return true;
        }
 }
 else{
    error.innerHTML="Invalid";
    error.style.color="red";
    return false;
}
}
