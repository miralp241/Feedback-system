function FEEDBACK(){
    var x = document.getElementById("sub-select");
    var y = x.options[x.selectedIndex].value;

    if(y=="co"){
        document.getElementById('arm').style.display='block';
        console.log(0);
    }
    if(y=="ds"){
        document.getElementById('arm').style.display='block';

    }
    if(y=="st"){
        document.getElementById('arm').style.display='block';

    }
    if(y=="dms"){
        document.getElementById('arm').style.display='block';

    }
}
function display()
{
    a = document.getElementById("co").value;
    b = document.getElementById("ds").value;
    c = document.getElementById("st").value;
    d = document.getElementById("dms").value;
 }   