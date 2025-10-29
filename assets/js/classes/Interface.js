export default class Interface {
  static handlerCreateTask(handler) {
    const nameInput = document.getElementById("newTaskName");
    const typeInput = document.getElementById("newTaskType");
    const dateInput = document.getElementById("newTaskDate");
    const btn = document.getElementById("newTaskValidate");

    btn.addEventListener("click", () => {
      handler({
        name: nameInput.value,
        type: typeInput.value,
        opt: { date: dateInput.value },
      });
    });
  }

  static displayTasks(tasks) {
    const listHTML = document.getElementById("taskList");
    listHTML.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("task-card");
      li.dataset.id = task.id;

      task.checkbox.classList.add("card-checkbox");
      li.appendChild(task.checkbox);

      const p = document.createElement("p");
      p.textContent = task.name;
      li.appendChild(p);

      // Affichage de la date si présente
      if (task.date) {
        const smallDate = document.createElement("small");
        smallDate.textContent = "📅 " + task.date;
        smallDate.classList.add("card-date");
        li.appendChild(smallDate);
      }

      const delBtn = document.createElement("button");
      delBtn.textContent = "×";
      delBtn.classList.add("card-delete");
      delBtn.addEventListener("click", () => {
        Interface.onDelete(task.id);
      });
      li.appendChild(delBtn);

      listHTML.appendChild(li);
    });
  }
}
