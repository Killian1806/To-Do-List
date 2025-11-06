export default class Task {
  static idCount = 1;

  // Propriétés
  id;
  name;
  checked = false;
  checkbox;

  constructor(data) {
    // Attribution d'un id
    this.id = Task.idCount;
    // Incrémentation du compteur
    Task.idCount++;
    this.name = data.name;

    // Création d'un élément HTML (input)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.checkbox = checkbox;
    // Appelle de la méthode toggle
    checkbox.addEventListener("click", () => this.toggle());
  }

  // Méthode qui inverse l'état checked de la tâche
  toggle = () => {
    this.checked = !this.checked;
    this.checkbox.parentElement.classList.toggle("completed", this.checked);
  };
}
