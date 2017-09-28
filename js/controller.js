function takevalue() {
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    if (isNotEmpty(FirstName)) {


        FirstName = initcap(FirstName);
        LastName = initcap(LastName);
        document.getElementById("message").innerHTML = FirstName + " " + LastName;
    } else {
        document.getElementById("firsterror").innerHTML = "firstname cant be blank";
    }
}

function cleardata() {
    var textboxes = document.getElementsByClassName("clearall");
    for (var i = 0; i < textboxes.length; i++) {
        textboxes[i].value = " ";
    }
    //document.getElementById("FirstName").value =" ";
    //document.getElementById("LastName").value =" ";
    document.getElementById("message").innerHTML = " ";
    document.getElementById("FirstName").focus;
    document.getElementById("firsterror").innerHTML = "";


}
window.addEventListener("load", bindEvent);

function bindEvent() {
    document.getElementById("greetbutton").addEventListener("click", takevalue);
    document.getElementById("clearbutton").addEventListener("click", cleardata);
    document.getElementById("FirstName").addEventListener("blur", takevalue);
    document.getElementById("FirstName").addEventListener("keyup", takevalue);

}