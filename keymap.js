window.addEventListener("keyup",key);
var c=1;
function key(e) {
	var x = e.key;
		if(x =="ArrowRight")
		{
			window.removeEventListener("keyup",key);
			next();
			setTimeout(function(){
				window.addEventListener("keyup",key);
			},3000);
		}
		else if (x =="ArrowLeft") 
		{
			window.removeEventListener("keyup",key);
			previous();
			setTimeout(function(){
				window.addEventListener("keyup",key);
			},3000);
		}
		else if( Number(x) >= 1 && Number(x) <= noOfImages)
		{
			window.removeEventListener("keyup",key);
			keyMap(Number(x));
			setTimeout(function(){
				window.addEventListener("keyup",key);
			},3000);
		}
}
