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
function changeCate(event){
	event.preventDefault();
	if(event.type == 'click'){
		var target = event.target,cateName = target.innerText.toLowerCase();
		if(target.classList.contains('active')){
		}else{
			var parent = target.parentNode,currentNode = parent.firstChild,n=parent.childNodes.length;
			//change the banner button
			while(currentNode !== null){
				if(currentNode.classList.contains('active')){
					currentNode.classList.remove('active');
					break;
				}
				currentNode = currentNode.nextSibling;
			}
			target.classList.add('active');
			//change works
			var works = document.querySelector('.works'),currentWork = works.firstChild;
			while(currentWork !== null){
				if(currentWork.classList.contains(cateName)){
					currentWork.classList.remove('hidden')
				}else{
					currentWork.classList.add('hidden');
				}
				currentWork = currentWork.nextSibling;
			}
		}
	}
}
window.addEventListener('load',function(event){
	var nav = document.querySelector('.nav');
	nav.addEventListener('mouseover',toggleNav,false);
	nav.addEventListener('mouseout',toggleNav,false);

	var cateBanner = document.querySelector('.cateBanner');
	cateBanner.addEventListener('click',changeCate,false);
},false);
