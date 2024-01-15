let table = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log(table);
document.getElementById('demo_1').innerHTML= table;


// map
let uno = table.map(myFunction);
document.getElementById("demo_2").innerHTML = uno;

function myFunction(num) {
  return num * 10;
}

// filter

// Création du tableau de chaînes
const tableauDeChaines = ["chat", "bol","chien", "oiseau",  "bal", "lion", "éléphant", "rat"];
// Utilisation de la méthode .filter() pour filtrer les chaînes
const nouveauTableau = tableauDeChaines.filter(chaine => chaine.length > 3);
// Affichage du nouveau tableau
console.log(nouveauTableau);
document.getElementById("demo_3").innerHTML = nouveauTableau;

// reduce
const somme = table.reduce((accumulateur, nombre) => accumulateur + nombre, 0);
document.getElementById("demo_4").innerHTML = somme;

// sort

const tableauTrié = tableauDeChaines.sort();
document.getElementById("demo_5").innerHTML = tableauTrié;

// foreach

// Utilisation de la méthode .forEach() pour imprimer chaque élément
table.forEach(element => {
  console.log(element);
});
document.getElementById("demo_6").innerHTML = table;
