const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let list = document.createElement("li");
    list.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      list.remove();
    });

    list.append(removeBtn);
    taskList.append(list);

    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addTask();
});

document.addEventListener("DOMContentLoaded", () => {
  addTask;
});
