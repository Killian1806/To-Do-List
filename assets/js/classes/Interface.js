export default class Interface {
  static handlerCreateTask(handler) {
    const newTaskName = document.getElementById("newTaskName");
    const newTaskType = document.getElementById("newTaskType");
    const newTaskDate = document.getElementById("newTaskDate");
    const newTaskValidate = document.getElementById("newTaskValidate");

    newTaskValidate.addEventListener("click", () => {
      const data = {
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      handler(data);
    });
  }

  static displayTasks(tasks) {
    const listHTML = document.getElementById("taskList");
    listHTML.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("task-card");

      task.checkbox.classList.add("card-checkbox");
      li.appendChild(task.checkbox);

      const p = document.createElement("p");
      p.textContent = task.name;
      li.appendChild(p);

      // Si la tâche est un Appoitment, on affiche la date
      if (task.date) {
        const smallDate = document.createElement("small");
        smallDate.textContent = "📅 " + task.date;
        smallDate.classList.add("card-date");
        li.appendChild(smallDate);
      }

      const delBtn = document.createElement("button");
      delBtn.textContent = "×";
      delBtn.classList.add("card-delete");
      li.appendChild(delBtn);
      
      listHTML.appendChild(li);
    });
  }
}
