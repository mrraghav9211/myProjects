function insert(num){
	document.form1.textview.value = document.form1.textview.value + num
}
function equal(){
	var disp = document.form1.textview.value
	if (disp) {
	   document.form1.textview.value = eval(disp)
	}
}

/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace()
{
var exp = document.form1.textview.value;
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}
