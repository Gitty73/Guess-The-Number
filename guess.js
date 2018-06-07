var arr = [1,2,3,4,5,6,7,8,9,10];
var btn = document.querySelector("button");
var h4 = document.querySelector("h4");
var rst = document.querySelector("#reset");
var clear = document.querySelector("input[type = 'reset']");

	var Guess = arr[Math.floor(Math.random()*arr.length)];

btn.addEventListener("click", function(){
	var num = Number(document.querySelector("input").value);
	if(num == ""){
		h4.textContent = "First enter a number!!";
		h4.style.color = "dodgerblue";
	}
	else if(num == Guess){
		h4.textContent = "Correct Guess!!!";
		h4.style.color = "limegreen";
	}else{
		h4.textContent = "Oops! Incorrect Guess";
		h4.style.color= "red";
	}
});

clear.addEventListener("click", function(){
	h4.textContent = "";
});

rst.addEventListener("click", function(){
	h4.textContent = "";
	Guess = arr[Math.floor(Math.random()*arr.length)];
});
