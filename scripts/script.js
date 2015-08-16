function openCategoryDialog(){
	document.getElementById("category-dialog-back").style.display = "block";
}
function closeCategoryDialog(){
	document.getElementById("category-dialog-back").style.display = "none";
}
function saveNewCategory(){
	var InputField = document.getElementById("category-name-input");
	var NewNode = document.createElement("li");
	NewNode.innerHTML = InputField.value;
	InputField.value = "";
	document.getElementById("category-list").appendChild(NewNode);
	document.getElementById("category-dialog-back").style.display = "none";
}