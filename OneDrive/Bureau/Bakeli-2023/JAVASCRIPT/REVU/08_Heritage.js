class Utilisateur {
    //Construicteur : C'est une fonction qui implemente les proprietés d'un object
    constructor(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

//Heritage des proprietés et des fonctions
class Admin extends Utilisateur {
    //methode accessible uniquement aux admins
    supprimerUtilisateurs(util){
        utilisateurs = utilisateurs.filter(utilisateur => {
            return utilisateur.email != util.email;
        });
    }
}

const util1 =  new Utilisateur('Coder', 'coder@gmail.com', 'Fatou', 'Kara', 'Badji');
const util2 =  new Utilisateur('Kaay', 'kaay@gmail.com', 'Atou', 'Bara', 'Baba')
const admin = new Admin('Khady diop', 'khady@gmail.com', 'Amina', 'Sidy');

let utilisateurs = [util1, util2, admin];
console.log(utilisateurs);

admin.supprimerUtilisateurs(util1);
console.log(utilisateurs);