document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    if (taskText === undefined) {
      taskText = taskInput.value.trim();
    }

    if (taskText !== "") {
      const list = document.createElement("li");
      list.textContent = taskText;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");

      removeBtn.addEventListener("click", () => {
        list.remove();

        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const updatedTasks = storedTasks.filter((task) => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      });

      list.appendChild(removeBtn);
      taskList.appendChild(list);

      taskInput.value = "";

      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
      }
    } else if (save) {
      alert("Please enter a task.");
    }
  }

  addButton.addEventListener("click", () => addTask());

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTask();
  });

  loadTasks();
});
