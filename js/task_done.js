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

		var newlist;

		if(target.checked) {
			newlist=listDoneId;
		} else {
			newlist=listToDoId;
		}

		document.getElementById(newlist).appendChild(task);
	}

	document.body.addEventListener("change",doneTask);
});


/**
end by Dmytro_Pinchuk@epam.com
**/
