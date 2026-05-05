//adding a new task
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.getElementById("taskForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let task = { title: title, description: description, completed: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    window.location.href = "about.html";
  });
}

//displaying an added task
const taskList = document.getElementById("taskList");
if (taskList) {
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <strong>${task.title}</strong><br>
        ${task.description}<br>
        <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

//deleting a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  location.reload();
}

//displaying the total tasks available
const total = document.getElementById("totalTasks");

if (total) {
  document.getElementById("totalTasks").textContent = tasks.length;

  let completed = tasks.filter((t) => t.completed).length;
  document.getElementById("completedTasks").textContent = completed;

  document.getElementById("pendingTasks").textContent =
    tasks.length - completed;
}