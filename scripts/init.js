var inputData = '{"initCategoryArray": ["new1","new2","new3"]}';
var initData = JSON.parse(inputData);

function init(){
	for (var i=0; i < initData.initCategoryArray.length; i++){
		addStartCategory(initData.initCategoryArray[i]);
	}
}

function addStartCategory(list_name){
	var NewNode = document.createElement("li");
	NewNode.innerHTML = list_name;
	document.getElementById("category-list").appendChild(NewNode);
}