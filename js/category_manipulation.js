/**
begin by Oleksandr_Blyzniuk@epam.com
**/

document.addEventListener("DOMContentLoaded", function() {

	var addCategoryWindowOpenID = document.getElementById("addCategoryWindow");
	var addCategorySaveButtonID = document.getElementById("addCategorySave");
	var addCategoryCloseButtonID = document.getElementById("addCategoryClose");
	var addCategoryWindowBackID = document.getElementById("darken");

	var openWindow = function(event){
		addCategoryWindowBackID.style.display = "block";
	}
	var saveNewCategory = function(event){
		
	}
	var closeWindow = function(event){
		addCategoryWindowBackID.style.display = "none";
	}


	addCategoryWindowOpenID.addEventListener("click",openWindow);
	addCategorySaveButtonID.addEventListener("click",saveNewCategory);
	addCategoryCloseButtonID.addEventListener("click",closeWindow);
	addCategoryWindowBackID.addEventListener("click",closeWindow);
});


/**
end by Oleksandr_Blyzniuk@epam.com
**/
