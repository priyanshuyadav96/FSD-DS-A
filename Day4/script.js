function validate(){
    uname=document.getElementById("un").value
    pass=document.getElementById("pass").value
    p1=document.getElementById("result")
    if(uname=="admin" & pass=="qwerty"){
        p1.innerText="validated"
    }
    else{
        p1.innerText="wrong password"
    }
}