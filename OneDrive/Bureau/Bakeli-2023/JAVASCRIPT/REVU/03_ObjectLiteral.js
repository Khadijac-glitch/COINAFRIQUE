// Object Literal
const utilisateur1 = {
    noms :'Bébe Jane',
    email : 'bébe@gmail.com',
    amis : [' Faty Mary ,'],
    login(){
        console.log('${this.email} est connecte(e)');
    },
    logout(){
        console.log('${this.email} esst déconnecté(e)');
    }
}

const utilisateur2 = {
    noms : 'madjiguéne',
    email : 'maj@gmail.com',
    amis : ['Khady', 'Soda'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

console.log(utilisateur2);
console.log(utilisateur1);

//Accès aux propriètés d'un object
console.log(utilisateur1.noms);
console.log(utilisateur1.email);

console.log(utilisateur2['noms']);
console.log(utilisateur2['email']);

utilisateur1.noms = 'Anta Dieng';
utilisateur1['email'] = 'anta@gmail.com'
console.log(utilisateur1);
