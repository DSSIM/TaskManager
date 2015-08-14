var listToDoId="ul1";
var listDoneId="ul2";

function doneTask(event){
//task done
	var taskLi=event.target;
	while(taskLi != event.currentTarget & taskLi.nodeName != "LI"){
		taskLi=taskLi.parentElement;
	}
	if(taskLi.)

}

function undoneTask(event){
//task undone
	if(event.target.parentElement.id == listDoneId) {
		console.dir(event);	
	}
}

document.addEventListener("DOMContentLoaded", function() {
	//alert("started");
	document.getElementById(listToDoId).addEventListener("change",doneTask);
	document.getElementById(listDoneId).addEventListener("change",undoneTask);
});


//alert("started");


