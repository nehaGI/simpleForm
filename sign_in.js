
//adding onclick lisener on signin button by using javascript native way
document.getElementById("login_btn").onclick = function() {
	alert("your are logged in");
};

//gets called on clieck of Know form Element button
function getFormElements() {
	let x=document.forms['form1'];
	let  text = "";
  let i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "</br>";
  }
  document.getElementById("allElements").innerHTML = text;
};
