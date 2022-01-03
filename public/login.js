function LoginForm(){
    var password=document.form.password.value;
    var email=document.form.email.value;
    var pos1=email.indexOf("@");
    var pos2=email.lastIndexOf(".");
   
      if(password.length<6){  
       alert("Password must be at least 6 characters long.");  
       return false;  
       }  

       if(pos1<1 || pos2<pos1+2 || pos2+2>=email.length){  
           alert("Please enter a valid e-mail address");  
           return false;  
           }   
     }