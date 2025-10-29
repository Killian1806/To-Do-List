export default class Interface {
  static listHTML = document.getElementById("taskList");

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
    Interface.listHTML.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");

      li.appendChild(task.checkbox);

      const p = document.createElement("p");
      p.textContent = task.name;
      li.appendChild(p);

      Interface.listHTML.appendChild(li);
    });
  }
}
