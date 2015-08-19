/**
begin by Dmytro_Pinchuk@epam.com
**/

document.addEventListener("DOMContentLoaded", function() {

	var listToDoId="tasksToDo";
	var listDoneId="tasksDone";

	var doneTask = function(event){
	//task done
		var target=event.target;

		if(target.dataset.action != "doneTask") return; //check is data-action is "doneTask" 

		var task=event.target.parentElement;

		while(task.nodeName != "LI"){ //searchnig parent LI node
			task=task.parentElement;
			if(task == event.currentTarget || task.nodeName == "UL") return;//if parent is current target or UL- there is error! no parent LI node 
		}

		if(target.checked) {
			var listDone=document.getElementById(listDoneId);
			listDone.insertBefore(task,listDone.firstChild);
		} else {
			document.getElementById(listToDoId).appendChild(task);
		}

	}

	document.addEventListener("change",doneTask);
});


/**
end by Dmytro_Pinchuk@epam.com
**/
