const mois = ["Janvier", "Fevrier", "Mars", "Avril","Mai","Juin","Juillet"];
// let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
// console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕
mois.pop();
mois.push("Aout");
mois.splice(1, 1, "fevrier");
let size = mois.length;
document.getElementById("demo_1").innerHTML = mois;
document.getElementById("demo_2").innerHTML = mois;
document.getElementById("demo_4").innerHTML = size;
document.getElementById("demo_3").innerHTML = mois[3];
// console.log(mois);