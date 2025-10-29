export default class Task {
  static idCount = 1;

  // Propriétés d'instance
  id;
  name;
  checked = false;
  checkbox;

  constructor(data) {
    // Attribue un ID unique à cette tâche
    this.id = Task.idCount;
    // Incrémente le compteur pour la prochaine tâche
    Task.idCount++;
    this.name = data.name;

    // Crée un élément HTML input de type checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.checkbox = checkbox;
    // Appelle la méthode toggle() quand on clique dessus
    checkbox.addEventListener("click", () => this.toggle());
  }

  // Méthode qui inverse l'état checked de la tâche
  toggle = () => (this.checked = !this.checked);
}
