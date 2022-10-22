// get all inputs 

        let    taskTitle         = document.getElementById('task-title');
        let    taskType          = document.querySelector("input[name='type']:checked");
        let    taskPriority      = document.getElementById('priority');
        let    taskStatus        = document.getElementById('status');
        let    taskDate          = document.getElementById('date');
        let    taskDescription   = document.getElementById('description');

        // console.log(taskTitle,taskType,taskPriority,taskStatus,taskDate,taskDescription);

// get tasks containers 

        let todo = document.getElementById('to-do-tasks');
        let inProgress = document.getElementById('in-progress-tasks');
        let done = document.getElementById('done-tasks');

        // console.log(todo,inProgress,done);

// gets all buttons those we need
        let submitBtn = document.getElementById('submit');

// adding task function

let tasks;
if(localStorage.myTasks != null){
        tasks = JSON.parse(localStorage.myTasks);
}else{
        tasks = [];
}

 submitBtn.onclick = function(){
        let newTask = {
                title : taskTitle.value,
                type : taskType.value,
                priority : taskPriority.value,
                status : taskStatus.value,
                date : taskDate.value,
                description : taskDescription.value
        }
        tasks.push(newTask);
        // save in localStorage 
        localStorage.setItem('myTasks',JSON.stringify( tasks));
        console.log(tasks);
        
        clearForm();
        displayData();
}
// clear the Form for another task 
function clearForm(){
        taskTitle.value ='';
        taskType.value ='feature';
        taskPriority.value ='High';
        taskStatus.value ='To Do';
        taskDate.value ='';
        taskDescription.value ='';
}

// display data function 

let situation =["To Do","In Progress","Done"];
function displayData(){
        // clear board
    todo.innerHTML= '';
    inProgress.innerHTML= '';
    done.innerHTML= '';
        let container = '';
        let tasksNumber = [0,0,0];
    for(let i=0; i<tasks.length;i++){
         
        if(tasks[i].status == situation[0]){
                tasksNumber[0]++;
                todo.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" id="bContainer" style="background-color: #FAF7F0;">
                <div class="editD">
                        <i onclick="deleteTask(${i})"  class="bi bi-trash mt-2" ></i>
                        <i class="bi bi-pencil-square mt-1" href="#"></i>
                </div>
                <div class="" style="width: 10%;">
                    <i class="bi bi-exclamation fw-bold fs-15px"></i> 
                </div>
                <div class="d-flex justify-content-between w-100"> 
                    <div class="col-10 ">
                        <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                        <div class="fs-10px text-gray">#${i+1} created in ${tasks[i].date}</div>
                        <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
                    </div>
                    <div class="col-2 d-flex justify-content-center flex-column">
                      
                            <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                            <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
                    </div>
                    </div>
            </button>`;   
        }
        else if(tasks[i].status == situation[1]){    
                tasksNumber[1]++;
                inProgress.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" id="bContainer" style="background-color: #FAF7F0;">
                <div class="editD">
                        <i onclick="deleteTask(${i})" class="bi bi-trash mt-2" ></i>
                        <i class="bi bi-pencil-square mt-1" href="#"></i>
                        </div>
                <div class="" style="width: 10%;">
                        <i class="bi bi-hourglass-split fw-bold fs-15px"></i> 
                </div>
                <div class="d-flex justify-content-between w-100"> 
                    <div class="col-10 ">
                        <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                        <div class="fs-10px text-gray">#${i+1} created in ${tasks[i].date}</div>
                        <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
                    </div>
                    <div class="col-2 d-flex justify-content-center flex-column">
                      
                            <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                            <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
                    </div>
                    </div>
            </button>`;
        }
        else if(tasks[i].status == situation[2]){
                tasksNumber[2]++;
                done.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" id="bContainer" style="background-color: #FAF7F0;">
                <div class="editD">
                                <i onclick="deleteTask(${i})" class="bi bi-trash mt-2" ></i>
                                <i class="bi bi-pencil-square mt-1" href="#"></i>
                        </div>
                <div class="" style="width: 10%;">
                        <i class="bi bi-check-all fw-bold fs-15px"></i> 
                </div>
                <div class="d-flex justify-content-between w-100"> 
                    <div class="col-10 ">
                        <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                        <div class="fs-10px text-gray">#${i+1} created in ${tasks[i].date}</div>
                        <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
                    </div>
                    <div class="col-2 d-flex justify-content-center flex-column">
                      
                            <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                            <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
                    </div>
                    </div>
            </button>`;
        }
    }

}
displayData();

// delete function 

function deleteTask(i){
        // console.log(i);
        tasks.splice(i,1);
        localStorage.myTasks= JSON.stringify(tasks);
        displayData();
}