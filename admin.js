var a = document.getElementById('arm');
window.onclick = function(event) {
    if (event.target == a) {
        a.style.display = "none";
    }
}

function logout(){

    lg = window.confirm("Do you wanna Log-Out???");
    if(lg){
        window.location.replace("login.html");
    }

}

function fun(x){
    if(x==1)
    document.getElementById('arm').style.display='block';
    else if(x==2)
    document.getElementById('ram').style.display='block';
    else if(x==3)
    document.getElementById('arc').style.display='block';
    else if(x==4)
    document.getElementById('car').style.display='block';

}


