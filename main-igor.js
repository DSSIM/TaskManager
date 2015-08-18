(function(){
		regClassList = document.getElementById("reg-form").classList;
		 moveUp = function(e){
			if (e.target.getAttribute("data-action")){
				regClassList.toggle('up');
				alert(regClassList);
			}
		};

	document.addEventListener('click', moveUp);
})();