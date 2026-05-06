//adding a new task
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //gets stored tasks and stores them in an array

const form = document.getElementById("taskForm"); //looks for form

if (form) {     //looks for html with form
  form.addEventListener("submit", function (e) {
    //eventListener that listens to submit task
    e.preventDefault(); //prevents page from refreshing after submission


    let title = document.getElementById("title").value.trim(); //gets value of title input
    let description = document.getElementById("description").value.trim(); //gets value of description input

    // VALIDATION
    if (title === "" && description === "") {
      alert("Please enter both task title and description."); //alert if both title and descrption are missing
      return;
    }

    if (title === "") {
      alert("Please enter a task title."); //alert if title is missing
      return;
    }

    if (description === "") {
      alert("Please enter a task description."); //alert if description is missing
      return;
    }

    let task = { title: title, description: description, completed: false }; //task object that stores details
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks)); //saves to localStorage

    window.location.href = "about.html"; //after submission takes you to the task list page
  });
}

//displaying an added task
const taskList = document.getElementById("taskList");
if (taskList) {   //checkd for list
  tasks.forEach((task, index) => {  //goes through task and its index
    let li = document.createElement("li"); //creates a task list
    li.innerHTML = `
        <strong>${task.title}</strong><br>
        ${task.description}<br>
        <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li); //adds li to ul
  });
}

//deleting a task
function deleteTask(index) {  //index of task to remove
  tasks.splice(index, 1); //removes one index in the arry
  localStorage.setItem("tasks", JSON.stringify(tasks)); //the storage is then updated
  location.reload(); //list in dislpayed is then updated
}

//displaying the total tasks available
const total = document.getElementById("totalTasks"); 

if (total) {
  document.getElementById("totalTasks").textContent = tasks.length; //Counts all tasks

  let completed = tasks.filter((t) => t.completed).length;
  document.getElementById("completedTasks").textContent = completed;

  document.getElementById("pendingTasks").textContent =
    tasks.length - completed;
}
