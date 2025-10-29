// Importation des classes
import Appoitment from "./Appoitment.js";
import Interface from "./Interface.js";
import Task from "./Task.js";

export default class App {
  // Tableau qui stocke les tâches de l'application
  tasks = [];

  constructor() {
    //
    Interface.handlerCreateTask((data) => {
      // Vérifie le type de tâche à créer
      if (data.type == "simple") {
        this.tasks.push(new Task(data));
      } else if (data.type == "appoitment") {
        this.tasks.push(new Appoitment(data));
      }
      // Affiche la liste mise à jour des tâches dans l'interface
      Interface.displayTasks(this.tasks);
    });
  }
}
