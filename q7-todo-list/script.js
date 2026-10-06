const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  taskInput.value = "";
});
