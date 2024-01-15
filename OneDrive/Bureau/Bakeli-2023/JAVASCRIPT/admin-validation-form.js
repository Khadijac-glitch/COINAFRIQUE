function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name == ""){
        alert("Le Nom est obligatoire");
        return false;
    }

    if (email == ""){
        alert("L'adress Email est obligatoire");
        return false;
    }
    if (password == ""){
        alert("Le Mot de passe est obligatoire");
        return false;
    }

    return true;
}
// <!-- ==========================SCRIPT POUR AUTHENTIFICATION FIREBASE===================  -->

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
       
        const firebaseConfig = {
          apiKey: "AIzaSyCyo7of9VPNbQqtBN3VYJL3ZJM-qFyDZKY",
          authDomain: "validation-javascript.firebaseapp.com",
          projectId: "validation-javascript",
          storageBucket: "validation-javascript.appspot.com",
          messagingSenderId: "944265527624",
          appId: "1:944265527624:web:0853d33f7d2aa2eadaf37d",
          measurementId: "G-JCXC8B27KG"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase();
        const auth = getAuth(app);
        const dbref = ref(db)
        


        let Name = document.getElementById("name")
        let email = document.getElementById("email")
        let email2 = document.getElementById("email2")
        let password = document.getElementById("password")
        let password2 = document.getElementById("password2")
        let registerForm = document.getElementById("registerForm")
        let loginForm = document.getElementById("loginForm")

// function pour enregistrer les nouveaux admins
        let RegisterUser = evt =>{
            evt.preventDefault();

            createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((credentials)=>{
                set(ref(db, 'UserAuthList' + credentials.user.uid),{
                    Name: Name.value
                });
            })
            .catch((error)=>{
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
            window.alert("Compte créer avec succèes, veuillez cliquer sur Se Connecter pour acceder à votre compte, Merci")
        }
        registerForm.addEventListener('submit', RegisterUser);

// function pour la connexion des admins

        let signInUser = evt =>{
            evt.preventDefault();

            signInWithEmailAndPassword(auth, email.value=email2.value, password.value=password2.value)
            .then((credentials)=>{
                get(child(dbref, 'UserAuthList' + credentials.user.uid)).then((snapshot)=>{
                    if (snapshot.exists) {
                        sessionStorage.setItem("user-info", JSON.stringify({
                            Name: snapshot.val().Name
                        }))

                        sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                        window.location.href = 'admin-dashboard.html'
                    }
                });
            })
            .catch((error)=>{
                alert(error.message);
                console.log(error.code);
                console.log(error.message);
            })
        }

        loginForm.addEventListener('submit', signInUser);

        // var loadFile = function (event) {
        // var image = document.getElementById("output");
        // image.src = URL.createObjectURL(event.target.files[0]);
        // };



        var fileText = document.querySelector('.fileText')
    var uploadPercentage = document.querySelector('.uploadPercentage')
    var progress = document.querySelector('.progress')
    var img = document.querySelector(".img")
    var percentVal
    var fileItem
    var fileName



    function getFile (e){
        fileItem = e.target.files[0]
        fileName = fileItem.name
        fileText = fileName
    }

    function uploadImage(){
        let storageRef = firebase.storage().ref("image/"+fileName) 
        let uploadTask = storageRef.put(fileItem)

        uploadTask.on("state_changed", (snapshot) =>{
            console.log(snapshot);
            percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            console.log(percentVal);
            uploadPercentage.innerHTML = percentVal + "%"
            progress.style.width=percentVal + "%"
        },(error)=>{
            console.log("error is ", error);
        },()=>{

            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log("URL", url);
                
                if (url != " ") {
                    img.setAttribute("src", url)
                    img.style.display="block"
                }
            })

            

        })
    }


// var add = document.getElementById('addArticles');
// var input = document.getElementById('new-category');
// var CategorieAdd = document.getElementById('CategorieAdd');

// add.addEventListener('click',addItem);
// input.addEventListener('keypress',function(e){
//     if(e.key=="Enter"){
//         addItem();
//     }
// });


// function addItem(e){
  
//   const item_value  = input.value;
//   const item = document.createElement('div');
// 		item.classList.add('item');

// 		const item_content = document.createElement('div');
// 		item_content.classList.add('content');

// 		item.appendChild(item_content);

// 		const input_item = document.createElement('input');
// 		input_item.classList.add('text');
// 		input_item.type = 'text';
// 		input_item.value = item_value;
// 		input_item.setAttribute('readonly', 'readonly');
//         input_item.addEventListener('dblclick', function(){
//             input_item.style.textDecoration = "line-through";
//         })
//         item_content.appendChild(input_item);

// 		CategorieAdd.appendChild(item);

// 		input.value = '';
// }