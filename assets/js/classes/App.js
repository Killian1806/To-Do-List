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

    Interface.onDelete = (id) => {
      this.tasks = this.tasks.filter((task) => task.id != id);
      Interface.displayTasks(this.tasks)
    }

    this.setupLogin();
  }

  setupLogin() {
    const loginModal = document.getElementById("login");
    const picto = document.querySelector(".user-picto");
    const cancelBtn = document.getElementById("cancel");
    const form = document.getElementById("loginForm");

    // Charger l'utilisateur si déjà connecté
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.updateUserPicto(picto);
    }

    // Clic sur le pictogramme
    picto.addEventListener("click", () => {
      if (this.user) {
        // Si déjà connecté → confirmation de déconnexion
        const confirmLogout = confirm(
          `Déconnexion de ${this.user.name} ?`
        );
        if (confirmLogout) {
          this.logout(picto);
        }
      } else {
        // Sinon → ouvrir la fenêtre de connexion
        loginModal.style.display = "flex";
      }
    });

    // Bouton Annuler → ferme la modale
    cancelBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    // Validation du formulaire de connexion
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("userName").value.trim();
      const email = document.getElementById("userEmail").value.trim();
      if (!name || !email) return;

      this.user = { name, email };
      localStorage.setItem("user", JSON.stringify(this.user));

      loginModal.style.display = "none";
      this.updateUserPicto(picto);
    });
  }

  updateUserPicto(picto) {
    picto.textContent = this.user.name.charAt(0).toUpperCase();
    picto.style.fontSize = "1.4rem";
    picto.title = `${this.user.name} (${this.user.email})`;
  }

  logout(picto) {
    this.user = null;
    localStorage.removeItem("user");

    // Restaure l'icône par défaut
    picto.textContent = "";
    picto.removeAttribute("title");
    picto.style.fontSize = "";
  }
}