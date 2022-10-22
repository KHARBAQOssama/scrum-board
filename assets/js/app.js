
/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
console.log(tasks);

    const todo = document.getElementById('to-do-tasks');
    const inProgress = document.getElementById('in-progress-tasks');
    const done = document.getElementById('done-tasks');

    const toDoTaskCount= document.getElementById('to-do-tasks-count');
    const inProgressTaskCount =document.getElementById('in-progress-tasks-count');
    const doneTaskCount =document.getElementById('done-tasks-count');

        // recuperer form inputs 
        const    taskTitle         = document.getElementById('task-title');
        const    taskType          = document.querySelector("input[name='type']:checked");
        const    taskPriority      = document.getElementById('priority');
        const    taskStatus        = document.getElementById('status');
        const    taskDate          = document.getElementById('date');
        const    taskDescription   = document.getElementById('description');
// console.log(todo);
let situation = ['To Do', 'In Progress', 'Done'];

const displayData =()=>{
    // clear board
    todo.innerHTML= '';
    inProgress.innerHTML= '';
    done.innerHTML= '';

    let orderTask = [0,0,0];
    // clearTasks();
    for(let i=0; i<tasks.length;i++){
    if(tasks[i].status == situation[0]){
        
        orderTask[0]++;
        todo.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" id="bContainer" style="background-color: #FAF7F0;">
        <div class="editD">
			<a onclick="deleteTask(${tasks[i].id});"> <i class="bi bi-trash mt-2" ></i></a>
			<i class="bi bi-pencil-square mt-1" href="#"></i>
		</div>
        <div class="" style="width: 10%;">
            <i class="bi bi-exclamation fw-bold fs-15px"></i> 
        </div>
        <div class="d-flex justify-content-between w-100"> 
            <div class="col-10 ">
                <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                <div class="fs-10px text-gray">#${tasks[i].id} created in ${tasks[i].date}</div>
                <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
            </div>
            <div class="col-2 d-flex justify-content-center flex-column">
                
                    <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                    <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
            </div>
            </div>
    </button>`
        
    }
    if(tasks[i].status == situation[1]){
        
        orderTask[1]++;
        inProgress.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" id="bContainer" style="background-color: #FAF7F0;">
        <div class="editD">
			<i class="bi bi-trash mt-2" onclick="deleteTask(${tasks[i].id});" ></i>
			<i class="bi bi-pencil-square mt-1" href="#"></i>
		</div>
        <div class="" style="width: 10%;">
        <i class="bi bi-hourglass-split fw-bold fs-15px"></i>
        </div>
        <div class="d-flex justify-content-between w-100"> 
            <div class="col-10 ">
                <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                <div class="fs-10px text-gray">#${tasks[i].id}  created in ${tasks[i].date}</div>
                <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
            </div>
            <div class="col-2 d-flex justify-content-center flex-column ">
                
                    <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                    <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
                </div>
            </div>
    </button>`

    }
    if(tasks[i].status == situation[2]){
    
        orderTask[2]++;
        done.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" id="bContainer" style="background-color: #FAF7F0;">
        <div class="editD">
			<i class="bi bi-trash mt-2" name="deleteBtn"  onclick="deleteTask(${tasks[i].id});" ></i>
			<i class="bi bi-pencil-square mt-1" href="#"></i>
		</div>
        <div class="" style="width: 10%;">
            <i class="bi bi-check-all fw-bold fs-15px"></i> 
        </div>
        <div class="d-flex justify-content-between w-100"> 
            <div class="col-10 ">
                <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                <div class="fs-10px text-gray">#${tasks[i].id} created in ${tasks[i].date}</div>
                <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
            </div>
            <div class="col-2 d-flex justify-content-center flex-column ">
                
                    <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                    <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
                </div>
            </div>
    </button>`
    }
     }  
     toDoTaskCount.innerHTML= orderTask[0];
     inProgressTaskCount.innerHTML= orderTask[1];
     doneTaskCount.innerHTML= orderTask[2];

 
}

displayData();

function clearForm(){
           taskTitle.value         = '';
           taskPriority.value      = '';
           taskStatus.value        = '';
           taskDate.value          = '';
           taskDescription.value   = '';
}



let idValue = 17;

function createTask(event) {
    idValue+=1;
    event.preventDefault();
    // Recuperer task attributes a partir les champs input
        
    let    taskId = idValue;
    // Créez task object
    let task = {
        'id'            :   taskId,
        'title'         :   taskTitle.value,
        'type'          :   taskType.value,
        'priority'      :   taskPriority.value,
        'status'        :   taskStatus.value,
        'date'          :   taskDate.value,
        'description'   :   taskDescription.value
    }

    // Ajoutez object au Array

    tasks.push(task);

    // refresh tasks
    displayData();
    clearForm();

}

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', createTask);


function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}


function deleteTask(x){
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id == x){
            tasks.splice(i,1);
            // if(tasks[i].status == situation[0]){
            //     orderTask[0]--;
            // }if(tasks[i].status == situation[1]){
            //     orderTask[1]--;
            // }if(tasks[i].status == situation[2]){
            //     orderTask[2]--;
            // }
    }
    displayData();
    }
}


