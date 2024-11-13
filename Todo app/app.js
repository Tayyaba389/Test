document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    addTask(taskText);
    taskInput.value = ""; 
});


// document.getElementById('taskInput').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         document.getElementById('addButton').click();
//     }
// });

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.addEventListener('click', function() {
        const newTaskText = prompt("Edit your task:", taskText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            li.firstChild.nodeValue = newTaskText; 
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
}

