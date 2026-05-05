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

//displaying
