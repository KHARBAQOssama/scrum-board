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


// lets create a helpers 
let mood = 'create'; 
let index;

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

        if(mood === 'create'){
                tasks.push(newTask);
                modalFooter.innerHTML=`
                <button class="btn text-black" aria-label="submit" id="submit"  data-bs-toggle="modal" >DONE</button>
                `;
                clearForm();
        }else{
                
                tasks[index] = newTask;
        }
        
        // save in localStorage 
        localStorage.setItem('myTasks',JSON.stringify( tasks));
        console.log(tasks);
        
       
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
                        <i class="bi bi-pencil-square" onclick="fullForm(${i});" data-bs-toggle="modal" href="#modal-task" mt-1" href="#"></i>
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

    // get spans counter elements and put the count inside them

    document.getElementById('to-do-tasks-count').innerHTML= tasksNumber[0];
    document.getElementById('in-progress-tasks-count').innerHTML= tasksNumber[1];
    document.getElementById('done-tasks-count').innerHTML= tasksNumber[2];

    // set a button that make us clear the board
    let deleteAll = document.getElementById('clear-all');
    if(tasks.length > 0){
        deleteAll.innerHTML =`<button type="button" onclick="deleteAllTasks()" class="btn bg-test"> ! CLEAR BOARD ! </button>`;
    }else{
        deleteAll.innerHTML ='';
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

// the function that makes us clear the board 
function deleteAllTasks(){
        localStorage.clear();
        tasks.splice(0);
        displayData();
        console.log("deleteAllFunction works");
}

let modalFooter = document.getElementById('modal-footer');
function fullForm(i){
        modalFooter.innerHTML=`
        <button class="btn text-black" aria-label="submit" data-bs-toggle="modal" >Save Changes</button>
        `;
        taskTitle.value         = tasks[i].title;
        taskType.value          = tasks[i].type;
        taskPriority.value      = tasks[i].priority;
        taskStatus.value        = tasks[i].status;
        taskDate.value          = tasks[i].date;
        taskDescription.value   = tasks[i].description;
        // console.log('fullForm works');
        mood = 'update';
        index = i;
}

function updateTask(i){
        console.log(i);
        modalFooter.innerHTML=`
        <button class="btn text-black" aria-label="submit" id="submit"  data-bs-toggle="modal" >DONE</button>
        `;
}