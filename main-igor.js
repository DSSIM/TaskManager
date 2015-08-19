var regClassList = document.getElementById("reg-form").classList;

function moveRegFormUp(e){
		if (e.target.getAttribute("data-action")){
			regClassList.toggle('up');
		}
	};

function deletePlaceholder(e){
	if (e.target.getAttribute('placeholder')){
		e.target.setAttribute('placeholder', '');
	}
}


document.addEventListener('click', moveRegFormUp);
//document.addEventListener('focus', deletePlaceholder);	