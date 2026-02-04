// =====================
// PRODUITS PAR DÉFAUT
// =====================
const produitsParDefaut = [
  {
    nom: "Google Pixel – Smartphone Android 5G",
    prix: "399 €",
    description: "Smartphone fluide avec Android pur, excellent appareil photo et connectivité 5G.",
    image: "pixel9a.jpg",
    lien: "https://www.amazon.fr/s?k=Google+Pixel",
    categorie: "telephone"
  },
  {
    nom: "Samsung Galaxy S24",
    prix: "849 €",
    description: "Écran AMOLED haute qualité, performances premium et autonomie optimisée.",
    image: "galaxys24.jpg",
    lien: "https://www.amazon.fr/s?k=Samsung+Galaxy+S24",
    categorie: "telephone"
  },
  {
    nom: "Casque JBL T500",
    prix: "18 €",
    description: "Casque filaire confortable avec basses puissantes et son clair.",
    image: "Ecouteur-jbl.jpg",
    lien: "https://www.amazon.fr/s?k=JBL+T500",
    categorie: "accessoire"
  },
  {
    nom: "Coque de protection",
    prix: "14 €",
    description: "Coque résistante pour protéger le téléphone contre les chocs et rayures.",
    image: "coque.jpg",
    lien: "https://www.amazon.fr/s?k=coque+smartphone",
    categorie: "accessoire"
  },
  {
    nom: "Chargeur USB multifonction",
    prix: "19 €",
    description: "Chargeur rapide compatible smartphones et autres appareils USB.",
    image: "usb.jpg",
    lien: "https://www.amazon.fr/s?k=chargeur+usb+rapide",
    categorie: "accessoire"
  },
  {
    nom: "Redmi Note Pro",
    prix: "299 €",
    description: "Excellent rapport qualité-prix avec grand écran et batterie longue durée.",
    image: "redmi15pro.jpg",
    lien: "https://www.amazon.fr/s?k=Redmi+Note+Pro",
    categorie: "telephone"
  }
];

// =====================
// PRODUITS SAUVEGARDÉS (ADMIN)
// =====================
const produitsStockes = JSON.parse(localStorage.getItem("produits")) || [];

// =====================
// PRODUITS FINAUX
// =====================
const produits = [...produitsParDefaut, ...produitsStockes];

// =====================
// CONTENEUR
// =====================
const container = document.getElementById("produits");

if (!container) {
  console.error("❌ DIV #produits introuvable");
}

// =====================
// AFFICHER UN PRODUIT
// =====================
function afficherProduit(produit) {
  container.innerHTML += `
    <div class="carte">
      <span class="badge">🔥 Top vente</span>
      <img src="${produit.image}" alt="${produit.nom}">
      <h2>${produit.nom}</h2>
      <p class="prix">💰 ${produit.prix}</p>
      <p>${produit.description}</p>
      <a href="${produit.lien}" class="btn" target="_blank" rel="nofollow sponsored noopener">
        Voir sur Amazon
      </a>
    </div>
  `;
}

// =====================
// AFFICHER TOUS LES PRODUITS
// =====================
function afficherTousLesProduits() {
  container.innerHTML = "";
  produits.forEach(afficherProduit);
}

// =====================
// FILTRER PAR CATÉGORIE
// =====================
function filtrerProduits(categorie) {
  container.innerHTML = "";

  const resultat =
    categorie === "all"
      ? produits
      : produits.filter(p => p.categorie === categorie);

  resultat.forEach(afficherProduit);
}

// =====================
// RECHERCHE
// =====================
function rechercherProduit() {
  const texte = document.getElementById("recherche").value.toLowerCase();
  container.innerHTML = "";

  produits
    .filter(p =>
      p.nom.toLowerCase().includes(texte) ||
      p.description.toLowerCase().includes(texte)
    )
    .forEach(afficherProduit);
}

// =====================
// AU CHARGEMENT
// =====================
document.addEventListener("DOMContentLoaded", afficherTousLesProduits);
