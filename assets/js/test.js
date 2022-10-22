import { tasks } from './data.js';

// //  ---------------------- get tasks containers---------------------------------
let todo = document.getElementById('to-do-tasks');
let inProgress = document.getElementById('in-progress-tasks');
let done = document.getElementById('done-tasks');

console.log(todo);

// let submitTask = document.getElementById('submit');

// let situation = ['To Do','In Progress','Done'];

// let toDoTaskCount = document.getElementById('to-do-tasks-count');
// let inProgressTaskCount = document.getElementById('in-progress-tasks-count');
// let doneTaskCount = document.getElementById('done-tasks-count');
// let clearBtn = document.getElementById('clear');




const displayData =()=>{
    let orderTask = [0,0,0];
    // clearTasks();
    for(let i=0; i<tasks.length;i++){
    if(tasks[i].status == situation[0]){
        
        orderTask[0]++;
        todo.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" style="background-color: #FAF7F0;">
        <div class="" style="width: 10%;">
            <i class="bi bi-exclamation fw-bold fs-15px"></i> 
        </div>
        <div class="d-flex justify-content-between w-100"> 
            <div class="col-10 ">
                <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                <div class="fs-10px text-gray">#${orderTask[0]} created in ${tasks[i].date}</div>
                <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
            </div>
            <div class="col-2 d-flex justify-content-center flex-column ">
                
                    <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                    <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
            </div>
            </div>
    </button>`
        
    }
    if(tasks[i].status == situation[1]){
        
        orderTask[1]++;
        inProgress.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" style="background-color: #FAF7F0;">
        <div class="spinner-border" role="status" style="width: 1.3em; height: 1.3em;">
            <span class="sr-only fw-bold fs-15px">Loading...</span>
        </div>
        <div class="d-flex justify-content-between w-100"> 
            <div class="col-10 ">
                <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                <div class="fs-10px text-gray">#${orderTask[1]}  created in ${tasks[i].date}</div>
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
        done.innerHTML += `<button class="border-0 w-100 rounded mb-2 shadow-sm d-flex text-start align-items-center" style="background-color: #FAF7F0;">
        <div class="" style="width: 10%;">
            <i class="bi bi-check-all fw-bold fs-15px"></i> 
        </div>
        <div class="d-flex justify-content-between w-100"> 
            <div class="col-10 ">
                <div class="fw-bolder fs-6" style="text-overflow: ellipsis; overflow: hidden;  height: 1.8em; white-space: nowrap; max-width: 25ch;">${tasks[i].title}</div>
                <div class="fs-10px text-gray">#${orderTask[2]} created in ${tasks[i].date}</div>
                <div class=" mb-1 fs-10px" title="${tasks[i].description}" style="text-overflow: ellipsis; overflow: hidden; height: 1.5em; white-space: nowrap; max-width: 25ch;">${tasks[i].description}</div>
            </div>
            <div class="col-2 d-flex justify-content-center flex-column ">
                
                    <span class="rounded text-center mb-1 fs-8px" style="background-color:rgb(217,205,184);">${tasks[i].priority}</span>
                    <span class=" text-center  fs-8px " style="border: 2px solid rgb(217,205,184); border-radius: 4px;">${tasks[i].type}</span>
                </div>
            </div>
    </button>`
    }

    toDoTaskCount.innerHTML= orderTask[0];
    inProgressTaskCount.innerHTML= orderTask[1];
    doneTaskCount.innerHTML= orderTask[2];

     }  

 
}



        

// // let newTasks = [];
const addTask = () =>{
        let    taskTitle         = document.getElementById('task-title');
        let    taskType          = document.querySelector("input[name='type']:checked");
        let    taskPriority      = document.getElementById('priority');
        let    taskStatus        = document.getElementById('status');
        let    taskDate          = document.getElementById('date') ;
        let    taskDescription   = document.getElementById('discription');

    let task = {
            'title'         : taskTitle.value,
            'type'          : taskType.value,
            'priority'      : taskPriority.value,
            'status'        : taskStatus.value,
            'date'          : taskDate.value,
            'description'   : taskDescription.value,
    }

    tasks.push(task);
    displayData();
    console.log(tasks);

} 




// submitTask.addEventListener('click',addTask);

// const clearTasks = (ev) => {
//     tasks[0] ='\0'
//     let orderTask= [0,0,0];
//     todo.innerHTML = '';
//     inProgress.innerHTML = '';
//     done.innerHTML = '';
//     displayData();
// }

// clearBtn.addEventListener('click', clearTasks);