let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.getElementById("taskForm");

if (form) {
form.addEventListener("submit", function(e) {
e.preventDefault();