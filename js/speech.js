window.onload = function() {
	var oul1 = document.getElementsByClassName("case-indicater")[0];
	var obtli = oul1.getElementsByTagName("li");
	var oul2 = document.getElementsByClassName("case-list")[0];
	var oli = oul2.getElementsByTagName("li");
	for(var i = 0; i < oli.length; i++) {
		obtli[i].index = i;
		obtli[i].onclick = function() {
			for(var j = 0; j < oli.length; j++) {
				$(oli[j]).removeClass("active");
				$(obtli[j]).removeClass("active");
			}
			$(oli[this.index]).addClass("active");
			$(obtli[this.index]).addClass("active");
		}
	}
}