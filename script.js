var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName("ul")[0];
var listElement = document.querySelectorAll("li");

button.addEventListener("click",clickFunction);
input.addEventListener("keypress",keyPressFunction);

function getInputValueLength(){
	return input.value.length;
}

function appendNewListElement(){
	var node = document.createElement("li");
	var textnode = document.createTextNode(input.value);
	node.appendChild(textnode);
	ul.appendChild(node);
	input.value = "";
}

function clickFunction(){
	if (getInputValueLength() > 0) {
		appendNewListElement();
	}
}

function keyPressFunction(e){
	if (e.keyCode === 13 && getInputValueLength() > 0) {
		appendNewListElement();
	}
}

ul.onclick = function(e){
	if(e.target.tagName != "LI"){
		return;
	}
	else{
		e.target.classList.toggle("done");
	}
}
