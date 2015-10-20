
var wpm = prompt("how fast do you read?");
var readingTime = function (){
var dantesInferno = [].slice.call(document.querySelectorAll('p'));

	var bigStr = " ";
	dantesInferno.forEach(function(currItem,idx,array) {
	console.log(currItem.textContent);
	bigStr+=currItem.textContent;
});
	var finalArray = bigStr.split(" ");

	var numOfWords = finalArray.length;




var total = Math.round(numOfWords/wpm); 
return total + " minutes";

};


document.querySelector('h2').innerHTML += readingTime();

