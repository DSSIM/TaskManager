/**
begin by Oleksandr_Blyzniuk@epam.com
**/

document.addEventListener("DOMContentLoaded", function() {

	var addCategoryWindowOpenID = document.getElementById("addCategoryWindow");
	var addCategorySaveButtonID = document.getElementById("addCategorySave");
	var addCategoryCloseButtonID = document.getElementById("addCategoryClose");
	var addCategoryWindowBackID = document.getElementById("darken");
	var categoriesList = document.getElementsByClassName("categories")[0].children[0];
	var inputCategory = document.getElementsByName("new_category")[0];
	var activeCategory;

	var openWindow = function(event){
		activeCategory = event.target;
		if (activeCategory === addCategoryWindowOpenID){
			addCategoryWindowBackID.children[0].children[0].children[0].innerHTML = "Enter a new category name";
			inputCategory.value = "";
		} else {
			addCategoryWindowBackID.children[0].children[0].children[0].innerHTML = "Edit a category name";
			inputCategory.value = activeCategory.textContent;
		}
		addCategoryWindowBackID.style.display = "block";
	}

	var saveButton = function(event){
		if (activeCategory === addCategoryWindowOpenID){
			saveNewCategory();
		} else {
			editCategory(activeCategory);
		}
	}

	var saveNewCategory = function(){
		var newCategory = document.createElement("li");
		var newCategoryDiv = document.createElement("div");
		newCategory.appendChild(newCategoryDiv);
		document.getElementsByClassName("categories")[0].children[0].appendChild(newCategory);
		editCategory(newCategory);

	}

	var editCategory = function(category){
		document.getElementsByClassName("active_category")[0].classList.remove("active_category");
		category.parentElement.classList.add("active_category");
		category.innerHTML = inputCategory.value+'<a href="#"></a>';
		closeWindow();
		event.preventDefault();
	}

	var closeWindow = function(event){
		addCategoryWindowBackID.style.display = "none";
	}

	addCategoryWindowOpenID.addEventListener("click",openWindow);
	addCategorySaveButtonID.addEventListener("click",saveButton);
	categoriesList.addEventListener("dblclick",openWindow);
	categoriesList.setAttribute("onselectstart","return false");
	addCategoryCloseButtonID.addEventListener("click",closeWindow);
	addCategoryWindowBackID.addEventListener("click",closeWindow);
});

/**
end by Oleksandr_Blyzniuk@epam.com
**/
