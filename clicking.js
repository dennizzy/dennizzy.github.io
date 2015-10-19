var button = document.querySelector("button")
var cookies = 0
var handleClickEvent = function (){
	console.log("i was clicked")
	cookies++
	document.querySelector("span").innerHTML = cookies
}

button.addEventListener("click", handleClickEvent)