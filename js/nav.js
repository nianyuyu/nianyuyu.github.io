window.addEventListener('load',function(){

	var keyValue=window.location.pathname;
	alert(keyValue);
	var text = document.getElementsByClassName("blog-nav-item");
	for(var i=0;i<text.length;i++){
	
		if(keyValue.toLowerCase().indexOf(text[i].innerText.toLowerCase())!=-1){
			text[i].className +=" colorShow";
			text[0].setAttribute("id","colorCancle");
		}
	}
	
})
