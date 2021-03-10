console.clear();
var popupform = document.getElementsByClassName("pop-up-form")[0];
var overlay = document.getElementsByClassName("overlay-pop-up")[0];
var getButton = document.getElementsByClassName("form-page-clicker")[0];
var mainButton = document.getElementsByClassName("button")[0];
var getQuoteButton = document.getElementsByClassName('get-quote-button')[0];
var closeButton = document.getElementsByClassName('pop-up-button')[0];

getButton.onclick=function(){
	popupform.style.display = "block";
	overlay.style.display = "block";
}
mainButton.onclick=function(){
	popupform.style.display = "block";
	overlay.style.display = "block";
	
}
getQuoteButton.onclick=function(){
	popupform.style.display = "block";
	overlay.style.display = "block";
}
overlay.onclick=function(){
	popupform.style.display = "none";
	overlay.style.display = "none";	
}
closeButton.onclick=function(){
	popupform.style.display = "none";
	overlay.style.display = "none";	
}


var closenavButton = document.getElementsByClassName('close-button')[0];

var line1 = document.getElementsByClassName('line-1')[0];
var line2 = document.getElementsByClassName('line-2')[0];

var phoneDropDown = document.getElementsByClassName('phone-menu')[0];
var body = document.getElementsByTagName('body')[0];
	
closenavButton.onclick=function(){
	var margin = window.getComputedStyle(line2).marginTop;
  if(window.getComputedStyle(body).width <= "600px" || window.getComputedStyle(body).width <= "768px" ){
	if(margin == "10px"){
		phoneDropDown.style.display = "flex";
		line2.style.marginTop = "0px"
		line1.style.transform = "rotateZ(54deg)";
		line2.style.transform = "rotateZ(-54deg)";
	}
	if(margin == "0px"){
		phoneDropDown.style.display = "none";
		line2.style.marginTop = "10px"
		line1.style.transform = "rotateZ(0deg)";
		line2.style.transform = "rotateZ(0deg)";
	}
  }
  else if(window.getComputedStyle(body).width > "768px"){
    phoneDropDown.style.display = "none"
  }
}
