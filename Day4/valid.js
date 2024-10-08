function validated(){
    uname=document.getElementById("un").value;
    pass=document.getElementById("pass").value;
    if(uname.length==0){
        alert("username field empty!")
        return false;
    }
    else if(uname.length<10){
        alert("username should not be less than 10 words")
        return false;
    }
    if(pass.length==0){
        alert("password field empty!")
        return false;
    }
    else if(pass.length<10){
        alert("password should not be less than 10 words")
        return false;
    }
    
}