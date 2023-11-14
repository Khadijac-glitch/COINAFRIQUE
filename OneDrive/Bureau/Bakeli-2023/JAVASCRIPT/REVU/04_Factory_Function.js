//Factory Function : c'est une maquette (model) pour créer des objects en JS
const utilisateur = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login(){
            console.log(`${email} est connecté(e)`);
        },
        logout(){
            console.log(`${email} est déconnecté(e)`);
        }
    }
}

const util1 = utilisateur('Tata', 'tata@gmail.com', 'Khady', 'Daba');
const util2 = utilisateur('Kara', 'kara@gmail.com', 'Fatima');
const util3 = utilisateur('Coder', '@gmail.com', 'Fatou', 'Kara', 'Badji');
console.log(util1);
console.log(util2);
console.log(util3);

util1.login();
util1.logout();

util2.login()
util2.logout()