function toggleNav(event){
	event.preventDefault();
	var target = event.srcElement || event.target;
	if(event.type == 'mouseover'){
		if(target.classList.contains('english')){
		  target.classList.remove('fadein');	
		  target.classList.add('fadeout');
		  var anotherSpan = target.nextSibling;
		  anotherSpan.classList.remove('fadeout');
		  anotherSpan.classList.add('fadein');
		  event.stopPropagation();
		}	
	}else if(event.type == 'mouseout'){
		if(target.classList.contains('chinese')){
		  target.classList.remove('fadein');
		  target.classList.add('fadeout');
		  var anotherSpan = target.previousSibling;
		  anotherSpan.classList.remove('fadeout');
		  anotherSpan.classList.add('fadein');
		  event.stopPropagation();
		}
	}
}
window.addEventListener('load',function(event){
	var nav = document.querySelector('.nav');
	nav.addEventListener('mouseover',toggleNav,false);
	nav.addEventListener('mouseout',toggleNav,false);
},false);
