// EXERCICE : complète les fonctions ci-dessous.

// 1. Récupère les éléments HTML dont tu as besoin.
const form = document.querySelector("#task-form");
// TODO : récupérer l'input, la liste, le message et le compteur.

// 2. Crée un tableau qui contiendra les tâches.
let tasks = [];

// 3. Écoute l'envoi du formulaire.
// TODO : empêcher le rechargement de la page.
// TODO : lire le texte saisi et vérifier qu'il n'est pas vide.
// TODO : ajouter une nouvelle tâche dans le tableau.
// TODO : vider le champ puis afficher la liste.

// 4. Crée une fonction renderTasks().
// Elle doit :
function renderTasks() {
  // TODO : vider la liste HTML.
  // TODO : parcourir le tableau tasks avec forEach().
  // TODO : créer un <li> pour chaque tâche.
  // TODO : afficher le texte et un bouton « Terminer ».
  // BONUS : ajouter un bouton « Supprimer ».
  // TODO : mettre à jour le nombre de tâches.
}

// 5. BONUS :
// - Une tâche terminée doit avoir la classe CSS "done".
// - Empêche l'ajout d'une tâche composée uniquement d'espaces.
// - Affiche « Aucune tâche pour le moment » si le tableau est vide.
// - Sauvegarde les tâches avec localStorage pour les retrouver après
//   fermeture et réouverture de la page.
