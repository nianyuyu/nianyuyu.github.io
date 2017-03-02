window.addEventListener('load',function(){
	var summarizeIcon = document.getElementsByClassName("summarize-icon")[0];
	var summarizeArea = document.getElementsByClassName("summarize-area")[0];	
	var a=document.getElementsByClassName("article-excerpt")[0].querySelectorAll("h2,h3,h4,h5,h6");
	var minNum = getMin(a);
	getTree(a,minNum,summarizeArea);
	summarizeIcon.onclick = showSomething;
	
	function showSomething(){
		if(tag){
			summarizeArea.style.display="none";
			tag=false;
			
		}else{
			summarizeArea.style.display="inline-block";
			tag=true;
			
		}
	}

	getDetail(summarizeArea);
})
var tag =true;

function getDetail(summarizeArea){
	if(window.addEventListener){
		window.addEventListener("DOMMouseScroll",function(event){
			isShow(event.detail,summarizeArea);
			
		})
	}
	window.onmousewheel = function(event){
		event = event ||window.event;
		isShow(event.wheelDelta,summarizeArea);
		

	}
	
	
}
function isShow(a,summarizeArea){
	if(a<0){
		summarizeArea.style.display="none";
		tag=false;
	}else{

	}
}

function getMin(node){
	var minNum;
	for(var i=0;i<node.length;i++){
		  minNum = node[0].tagName.slice(1);
		 if(minNum>node[i].tagName.slice(1)){
		 	minNum = node[i].tagName.slice(1);
		 }
	}
return minNum;	
}

function getTree(node,minNum,getTreeNode){
	var str="";
	for(var i=0;i<node.length;i++){
		var brNum = node[i].tagName.slice(1)-minNum;
		for(var j=0;j<brNum;j++){
			str+="<span class='addbland'></span>";
		}
		str +="<a href=#"+node[i].getAttribute("id")+">"+node[i].getAttribute("id")+"</a><br>"
	}
	getTreeNode.innerHTML=str;
}
// node_sass:
//   outputStyle: nested
//   precision: 5
//   sourceComments: false