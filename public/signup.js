 function formValidation(){
 var firstName=document.form.firstname.value;
 var lastName=document.form.lastname.value;
var password=document.form.password.value;
 var email=document.form.email.value;
 var pos1=email.indexOf("@");
 var pos2=email.lastIndexOf(".");
 if (firstName==null || firstName==""){  
    alert("First Name can't be blank");  
    return false;   
  }else if (lastName==null || lastName==""){  
   alert("Last Name can't be blank");  
    return false;}
  else if(password.length<6){  
   alert("Password must be at least 6 characters long.");  
    return false;  
   }  
    if (pos1<1 || pos2<pos1+2 || pos2+2>=email.length){  
       alert("Please enter a valid e-mail address");  
        return false;  
        } 
      }

     // const signup=document.querySelector(".signup form");
      //button=signup.querySelector(".field button");
     // form.onsubmit=(e)=>{
       // e.preventDefault();
      //}
      //button.onclick=()=>{
        //let x=new XMLHttpRequest();
        //x.open("POST","index.php",true);
        //x.onload=()=>{
          
        //}
        //x.send();
      //}