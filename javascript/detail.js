
var bac = document.getElementById('bac');

bac.onclick = function(){
	window.history.go(-1);
}

var modal = document.getElementById('win');

var btn = document.getElementById('ope');

var clo = document.getElementById('clo');

btn.onclick = function(){
	modal.style.display = "block";
}

clo.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}