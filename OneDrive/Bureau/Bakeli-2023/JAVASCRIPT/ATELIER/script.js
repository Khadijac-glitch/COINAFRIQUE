    // Tableau de 20 personnes avec des données aléatoires
    let personnes = [];
    for (let i = 0; i < 20; i++) {
        personnes.push({
            prenom: 'Jonh' + i,
            nom: 'Doe' + i,
            age: Math.floor(Math.random() * 50) + 20, // Entre 20 et 70 ans
            note: Math.floor(Math.random() * 20) + 1, // Entre 1 et 20
            email: 'personne' + i + '@exemple.com'
        });
    }

    let tableBody = document.getElementById('tableBody');
    let tableContent = '';
    let maxNote = personnes[0].note;
    let minNote = personnes[0].note;

    personnes.forEach(personne => {
        tableContent += '<tr>';
        tableContent += '<td>' + personne.prenom + '</td>';
        tableContent += '<td>' + personne.nom + '</td>';
        tableContent += '<td>' + personne.age + '</td>';
        tableContent += '<td>' + personne.note + '</td>';
        tableContent += '<td>' + personne.email + '</td>';
        tableContent += '</tr>';
//la plus grande note et la plus petite
        if (personne.note > maxNote) {
            maxNote = personne.note;
        }

        if (personne.note < minNote) {
            minNote = personne.note;
        }
        

    });

    tableBody.innerHTML = tableContent;
    document.write("La plus grande note est :     " + maxNote );
    document.write("La plus petite note est : " + minNote);
//l'age
if (personne.age > maxAge) {
            maxAge = personne.age;
        }

        if (personne.age < minAge) {
            minAge = personne.age;
        }
    ;

    tableBody.innerHTML = tableContent;
    document.write("La personne la plus âgée a " + maxAge + " ans.");
    document.write("La personne la moins âgée a " + minAge + " ans.");