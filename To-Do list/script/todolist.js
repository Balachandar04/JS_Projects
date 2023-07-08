let taskList = [];

function addTask(){
    let inputElement = document.querySelector('.input-box');
    let dateElement = document.querySelector('.date-input');
    
    taskList.push({'task':inputElement.value,
                    'due':dateElement.value} );
    inputElement.value='';
    dateElement.value="";
    renderTasks();
    console.log(taskList)
}
function renderTasks(){
    let htmlTasks='';
    for(let i =0; i<taskList.length;i++){
        htmlTasks+=`<div class="todo-div"><div class="task-div">
                        <p class="task-para">${taskList[i].task}</p></div>
                        <div class="due-div">
                            <p class="due-para">${taskList[i].due}</p>
                        </div>
                        <div >
                            <button class="delete-button" onclick="removeTask(${i})">Delete</button>
                        </div><br>
                    </div>`;  
    }
    document.querySelector('.display-div').innerHTML= htmlTasks;
}
function removeTask(index){
    taskList.splice(index,1);
    renderTasks();
}
function handleKeyDown(event){
    if(event.keyCode === 13){
        addTask();
    }
}