function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    if (taskText === '')
    alert("Enter your task");
    
    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
    
    taskInput.value = '';
}

function removeTask(button) {
    button.parentElement.remove();
}
