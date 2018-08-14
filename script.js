var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName("ul")[0];
var listElement = document.querySelectorAll("li");
var test = document.getElementById("test");

button.addEventListener("click",clickFunction);
input.addEventListener("keypress",keyPressFunction);

function getInputValueLength(){
	return input.value.length;
}

function appendNewListElement(){
	var node = document.createElement("li");
	var textnode = document.createTextNode(input.value);
	var newbtn = document.createElement("button");
	newbtn.classList.add("deletebtn");
	newbtn.appendChild(document.createTextNode("delete"));
	node.appendChild(textnode);
	node.appendChild(newbtn);
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
	if(e.target.tagName != "LI" && e.target.className != "deletebtn"){
		return;
	}
	else if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	}
	else if(e.target.className ==="deletebtn"){
		deleteListElement(e.target);
	}
}

function deleteListElement(e){
	e.parentNode.parentNode.removeChild(e.parentNode);
}