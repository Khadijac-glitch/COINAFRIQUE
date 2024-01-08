
function Products(photos, nom, tail, prix ) {
    this.photos = photos,
    this.nom = nom,
    this.tail = tail,
    this.prix = prix
    // this.action = action
}

const product1 = new Products('./img/men1.jpeg','Jordan','M',20000);
const product2 = new Products('./img/men2.jpeg','Paul','S',15000);
const product3 = new Products('./img/men3.jpeg','Castel','L',10000);
const product4 = new Products('./img/men3.jpeg','Hope','S',14000);
const product5 = new Products('./img/men2.jpeg','Star','X',18000);
const product6 = new Products('./img/men1.jpeg','Force','W',13500);
const product7 = new Products('./img/men1.jpeg','Ken','M',24000);
const product8 = new Products('./img/men2.jpeg','Vost','L',34000);
const product9 = new Products('./img/men3.jpeg','Best','X',25000);
const product10 = new Products('./img/men1.jpeg','Cost','S',35000);

let products = [];
products.push(product1, product2, product3, product4, product5, product6, product7 ,product8,product9,product10);

function populateTableList() {
    let listOfProducts = '';
    
    products.forEach((prod, index) => {
        listOfProducts += `
        <tr class="text-center">
            <td><img src="${prod.photos}" class="img-fluid img-thumbnail w-50"></td>
            <td>${prod.nom}</td>
            <td>${prod.tail}</td>
            <td>${prod.prix}</td>
            
            <td class="">
                <button class="btn-info" onclick="addToCart(${index})">Add</button>
                <button class="btn-danger" onclick="deleteProduct(${index})">Delete</button>
            </td>
        </tr>
        `;
    });

    document.getElementById('productList').innerHTML = listOfProducts;
}

function addToCart(index) {
    // Logique pour ajouter le produit au panier en utilisant l'index
    console.log('Ce produit est ajouté:', products[index]);
}

function deleteProduct(index) {
    // Logique pour supprimer le produit en utilisant l'index
    console.log('Ce produit est supprimé:', products[index]);
}
