function ishideshow(){
    var demoimg = document.getElementById("login-visimg");
    var demoin = document.getElementById("password");
    if(demoin.type == "password"){
        demoin.type = "text";
        demoimg.src = "img/invisible.png";
    }
    else{
        demoin.type = "password";
        demoimg.src = "img/visible.png";
    }
}