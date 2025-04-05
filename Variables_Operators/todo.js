// Create basic structure
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.background = "#f4f4f4";
document.body.style.padding = "50px";

// Container
const container = document.createElement("div");
container.style.background = "white";
container.style.padding = "20px";
container.style.borderRadius = "10px";
container.style.display = "inline-block";

// Heading
const heading = document.createElement("h1");
heading.textContent = "My To-Do List";

// Input
const input = document.createElement("input");
input.type = "text";
input.id = "taskInput";
input.placeholder = "Add new task...";
input.style.padding = "10px";
input.style.width = "200px";

// Button
const addButton = document.createElement("button");
addButton.textContent = "Add Task";
addButton.style.padding = "10px";
addButton.style.marginLeft = "5px";

// Task List
const taskList = document.createElement("ul");
taskList.id = "taskList";
taskList.style.padding = "0";
taskList.style.marginTop = "20px";

// Add Task Function
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.style.listStyle = "none";
  li.style.margin = "10px 0";
  li.style.textAlign = "left";

  // Toggle complete
  li.onclick = function () {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    li.style.color = li.style.color === "gray" ? "black" : "gray";
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function (e) {
    e.stopPropagation(); // prevent toggle on delete
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  input.value = "";
}

// Add button click event
addButton.onclick = addTask;

// Append everything
container.appendChild(heading);
container.appendChild(input);
container.appendChild(addButton);
container.appendChild(taskList);
document.body.appendChild(container);
