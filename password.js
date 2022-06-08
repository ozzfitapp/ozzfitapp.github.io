function checkPassword (){
    // retriving password
  var passwordBoxObject = document.getElementById ("passwordBox");
  // getting answer from DOM
  var passwordEntered = passwordBoxObject.value;
  // check what password was in cosole
console.log ("User entered password:",passwordEntered);
// setting what password should be
var sitePassword = "codeclub";
// telling whta happens if password correct or incorrect
if (passwordEntered == sitePassword){
    console.log("Allow!");
    // opening members page when corrct password
    window.location.assign("members.html");
} else{
 console.log("Block!");
 // adding style to inoccrect password
    document.getElementById("incorrect-password").style.color="red";
  //adding text to incorrect password  
    var paraElem = document.getElementById("incorrect-password").innerHTML = "Inorrect password. Please try again...";
   
}
}