function Utilisateur(noms, email, ...amis ){
    this.noms = noms;
    this.email = email;
    this.amis = amis;
    this.login = function(){
        console.log('${this.email} est connecté(e)');
    }
    this.logout = function(){
        console.log('${this.noms} est déconnecté(e)');
    }
}
// Une instance
const util1 = new Utilisateur('Tata', 'tata@gmail.com', 'Khady', 'Daba');
const util2 =  new Utilisateur('Kara', 'kara@gmail.com', 'Fatima');
const util3 =  new Utilisateur('Coder', 'coder@gmail.com', 'Fatou', 'Kara', 'Badji');
const util4 =  new Utilisateur('Kaay', 'kaay@gmail.com', 'Atou', 'Bara', 'Baba')
console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);

// Accès aux methodes
util1.login();
util2.logout();

