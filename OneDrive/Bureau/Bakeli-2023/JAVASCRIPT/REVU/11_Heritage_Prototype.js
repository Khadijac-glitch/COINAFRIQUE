//Prototype (__proto__) : c'est un object qui regreoupe l'ensemble des methodes d'un objet
function Utilisateur(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

function Admin(...parms){
    //Heritage des proprietés
    Utilisateur.apply(this, parms);
}

//Liaison d'une methode au prototype
Utilisateur.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
}

//Heritage des prototypes (methodes)
Admin.prototype = Object.create(Utilisateur.prototype);

//Fonction seulement accessible par l'admin
Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs = utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email;
    });
}

const util1 = new Utilisateur('Tata', 'tata@gmail.com', 'Khady', 'Daba');
const util2 =  new Utilisateur('Kara', 'kara@gmail.com', 'Fatima');
const util3 =  new Utilisateur('Coder', 'coder@gmail.com', 'Fatou', 'Kara', 'Badji');
const admin = new Admin('Khady diop', 'khady@gmail.com', 'Amina', 'Sidy');

let utilisateurs = [util1, util2, util3, admin];

console.log(utilisateurs);

admin.supprimerUtilisateur(util1);
console.log(utilisateurs);