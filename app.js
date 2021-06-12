function fn(){
	//Creating new Div
	let h= document.createElement("h2").appendChild(document.createTextNode("You are looged in Successfully"));
	let msgDiv= document.createElement("div");
	 //adding some style to Div
	 
	 msgDiv.style.backgroundColor= "#ffaa00";
	 msgDiv.style.width="200px";
	 msgDiv.style.height="100px";
	 msgDiv.style.marginLeft="500px";
	 msgDiv.style.marginTop="150px";
	// msgDiv.style.class="login_Div";
	 msgDiv.appendChild(h);
	
	document.getElementById("main_div1").remove();
	document.body.appendChild(msgDiv);
	
		 
};
	
const sbmtBtn = document.getElementById("sbmtbtn");
//adding listener by using jquery way
sbmtBtn.addEventListener('click',fn);

console.log(screen.width);


/* //adding images
function addImage(){
	let imgEle=document.getElementById("img1")
	imgEle.src = "flatboats.jpg";
	//adding css style throgth javascipt code
	imgEle.style.width = "100%";
	imgEle.style.height= "auto";
     imgEle.alt="flat boats";
	imgEle.style.display="block";
	
} */
function getContent(id){
	id.value=id.value.toUpperCase();
	//not working check reason
	//id.maxlength="10";
	
}

function mOver(id){
	id.innerHTML = "Thank You";
	id.style.backgroundColor='grey';
}

function mOut(id){
	id.style.backgroundColor = "#00b377";
}

function showTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}