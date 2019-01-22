

function func(){

    a = document.getElementById("username").value;
    b = document.getElementById("pswrd").value;
    c = document.getElementById("admin-log").checked;
    d = document.getElementById("student-log").checked;
    e = document.getElementById("username-req");
    f = document.getElementById("pswrd-req");

    if(a=="admin" && b=="admin" && c==true)
    {
        window.location.assign("admin.html");
        return;
    }
    else if(a=="student" && b=="student" && d==true)
    {
        window.location.assign("stu-feedback.html");
        return;
    }
    else
    {
        alert("USERNAME or PASSWORD INCORRECT");
    }

    if(a=="" && b=="")
    {
        e.innerHTML="It is mandatory";
        f.innerHTML="It is mandatory";
        return;
    }else if(a=="" && b!="")
    {

        e.innerHTML="It is mandatory";
        f.innerHTML="";
        return;

    }else if(a!="" && b=="")
    {
        e.innerHTML=""
        f.innerHTML="It is mandatory";
        return;

    }
    else
    {
        e.innerHTML="";
        f.innerHTML="";
    }

    if(b.length<5)
    {
        f.innerHTML="Length of the PASSWORD must be greater then 4 char. length";
    }
    else
    {
        f.innerHTML="";
    }
}