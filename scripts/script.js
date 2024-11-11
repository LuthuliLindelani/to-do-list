let todos = [];

const addBtn = document.getElementById("addTask");

const display = () => {
  let tasks = document.getElementsByClassName("task-list");
  todos = JSON.parse(localStorage.getItem("todos") || "[]");

  tasks[0].innerHTML = todos?.map((todo, index) => {
    return `<li>
                    <div class="priority-color" style="background-color:${priority(
                      todo
                    )}"></div>
                    <div class="content">
                        <span contenteditable="true" class="title">${
                          todo.title
                        }</span>
                        <span contenteditable="true">${todo.description}</span>
                    </div>
                    <div class="butttons">
                        <button id="${index}" class="del-btn"><i class="bi bi-trash-fill"></i></button>
                        <input type='checkbox' class="check-btn"></input>
                    </div>
                </li>
            `;
  });

  const deleteBtn = document.querySelectorAll(".del-btn");
  const title = document.querySelectorAll("title");

  console.log(title);

  deleteBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      display();
    });
  });
  title.forEach((btn) =>
    btn.addEventListener("keydown", () => {
      console.log("bdgujfvhd");
    })
  );
};

display();

// initialize checkbox
function initCheck(isComplete) {
  return isComplete ? "checked" : "";
}

addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;

  todos.push({ title, description, priority, complete: false });

  localStorage.setItem("todos", JSON.stringify(todos));
  display();
});

function edit(index, complete) {
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;
  const title = document.getElementById("title").value;

  const btn = document.querySelector("#check-" + index);
  todos[index] = { title, description, priority, complete: complete };

  console.log(todos);
  display();
}

function priority(todo) {
  return todo.priority == "low"
    ? "green"
    : todo.priority == "medium"
    ? "yellow"
    : "red";
}
