alert('hello, welcome to my colour pallets press OK to continue');


let content = document.querySelector('h2')

function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    var userval = confirm("Do you want to change background colour?");
    if (userval == true) {
        document.write("WELCOME HOME MY NAME IS AOKI")
        document.getElementsByTagName("BODY")[0].style.backgroundColor = b;

    } else {
        document.write("User don't want to continue....:")
        document.write("oops! sad to see you go welcome back later");
        document.body.style.backgroundColor = "yellow";

    }
}


function showdiv() {
    document.getElementById("container").style.visibility = "visible";
}
setTimeout("showdiv()", 2000);

function hidediv() {
    document.getElementById("container").style.visibility = "hidden";
}
setTimeout("hidediv()", 12000);