const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const sortBySelect = document.getElementById('sort-by');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
            <span contenteditable="true">${task.text}</span>
            <button class="delete-button">Видалити</button>
        `;
        taskList.appendChild(taskItem);

        checkbox.addEventListener('change', () => {
            tasks[index].completed = !tasks[index].completed;
            tasks[index].updatedAt = new Date();
            renderTasks();
        });

        const taskTextSpan = taskItem.querySelector('span');
        taskTextSpan.addEventListener('blur', () => {
            tasks[index].text = taskTextSpan.textContent;
            tasks[index].updatedAt = new Date();
            renderTasks();
        });

        const deleteButton = taskItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({
            text: taskText,
            completed: false,
            addedAt: new Date(),
            updatedAt: new Date()
        });
        taskInput.value = '';
        renderTasks();
    }
}

function sortTasks() {
    const sortBy = sortBySelect.value;
    switch (sortBy) {
        case 'added':
            tasks.sort((a, b) => a.addedAt - b.addedAt);
            break;
        case 'completed':
            tasks.sort((a, b) => {
                if (a.completed === b.completed) return 0;
                return a.completed ? -1 : 1;
            });
            break;
        case 'updated':
            tasks.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); 
            break;
    }
    renderTasks();
}

addTaskButton.addEventListener('click', addTask);
sortBySelect.addEventListener('change', sortTasks);

renderTasks();