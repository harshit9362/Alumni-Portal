
    function validate() {
    var name= document.myfoorm.field1.value;
    var pass1=document.myfoorm.field2.value;
    var pass2=document.myfoorm.field3.value;
    var mail=document.myfoorm.field4.value;
    var mob=document.myfoorm.field5.value;;
 
    if(name == "" )
    {
        alert("Please Enter Username!");
        return false;
    }

    if(name.length <=7 || name.length >33)
    {
        alert("Please choose username between 8-32 characters");
        return false;
    }

    if(pass1.length<8 || pass1.lengh>24)
    {
        alert("Please Choose A Password between 8-24 characters");
        return false;
    }

    if(pass1 == "")
    {
        alert("Please Enter Your Password!");
        return false;
    }

    if(pass2 == "")
    {
        alert("Please Confirm Your Password");
        return false;
    }

    if(pass1 != pass2)
    {
        alert("Passwords Do Not Match!");
        return false;
    }

    if(mail == "")
    {
        alert("Please Enter Your E-mail Address!");
        return false;
    }

    if(mob==""){
        alert("Please Enter Your Mobile Number!");
        return false;
    }

    if(mob.length != 10)
    {
        alert("Please Enter Valid Mobile Number!");
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true);
  }
    else{alert("You have entered an invalid email address!")
    return (false);}
}

