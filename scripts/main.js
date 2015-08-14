var toDoApplication = {};

(function(toDoApplication){
    var _document,
        _container,
        id = 0,
        tasks = []; // an array for aggregation completed (strukout tasks)
        
    toDoApplication.init = function(document){
        _document = document;
        _container = _document.getElementById('todo-container');

        this.addTaskContainer(_container);
        this.addTaskListContainer(_container)

    };
    
    toDoApplication.addTaskContainer = function(baseNode){
        var containerElement = _document.createElement('div');
        var mainInputElement = _document.createElement('input');
        var self = this;
        //var id = this.nextId();
        
        containerElement.setAttribute('id', 'add_main_task_field');
        containerElement.appendChild(mainInputElement);
        //taskLi.setAttribute('data-task-container-id', id);
        
        mainInputElement.addEventListener('keydown', addEventHitEnter);
        
        function addEventHitEnter(evt){
            var event = evt || event;
            // event.keyCode == 13 means 'enter' button
            if (event.keyCode != 13) {
                return;
            } else {
			
                self.addTask(baseNode, mainInputElement.value);
				mainInputElement.value = '';

            };
        }
        
        baseNode.appendChild(containerElement);
    };
    
    toDoApplication.addTaskListContainer = function(baseNode){
		var addedTaskUlcontainer = _document.createElement('div');
        var addedTaskUl = _document.createElement('ul');
        
		addedTaskUlcontainer.setAttribute('id', 'main_task_container');
		
		addedTaskUl.setAttribute('id', 'main_task_list');
		addedTaskUlcontainer.appendChild(addedTaskUl);
        baseNode.appendChild(addedTaskUlcontainer);
    };
    
    
    toDoApplication.addTask = function(baseNode, task_title){
        var containerTaskLi = _document.createElement('li');
		var containerTaskUl = _document.getElementById('main_task_list');
		var tag_a = _document.createElement('a');
		var tag_span_main = _document.createElement('span');
		task_properties = {'id': id.toString(), 'category': 'category', 'have_subtasks': false  };
		
		
		
		tag_a.setAttribute('class', 'main_task_check_link');
		tag_span_main.innerHTML = task_title;
		
		containerTaskLi.setAttribute('id', 'main_' + id);
		containerTaskLi.appendChild(tag_a);
		containerTaskLi.appendChild(tag_span_main);
		
		id++;
		
		containerTaskUl.appendChild(containerTaskLi);
		tasks.push(task_properties);
		
		console.log(tasks);

    };

})(toDoApplication);