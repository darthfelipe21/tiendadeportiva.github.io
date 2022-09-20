class Products {
        constructor(id, name, category, brand, color, stock, precio) {
                this.id = id;
                this.name = name;
                this.category = category;
                this.brand = brand;
                this.color = color;
                this.stock = stock;
                this.precio = precio;
        }
}
let products = []; 

products.push (new Products(
        products.length + 1,
        "guante de baseball",
        "Baseball",
        "Rawling",
        "Negro",
        3,
        100
));
products.push (new Products(
        products.length + 1,
        "balon de nfl",
        "Futbol Americano",
        "Wilson",
        "Marron",
        5,
        60
));
products.push (new Products(
        products.length + 1,
        "raqueta de tenis",
        "Tenis",
        "Wilson",
        "Azul/Naranja",
        7,
        120
));
products.push (new Products(
        products.length + 1,
        "gorra f1",
        "Formula 1",
        "Mclaren",
        "Naranja",
        4,
        30
));
products.push (new Products(
        products.length + 1,
        "balon de futbol",
        "Champions League",
        "ADIDAS",
        "Edición Champions League",
        2,
        90
));
products.push (new Products(
        products.length + 1,
        "balon de baloncesto",
        "Basketball",
        "Nike",
        "Naranja",
        6,
        80
));

alert(`Seleecione por el nombre alguno de los siguientes productos:
- Guante de Baseball
- Balon de NFL
- Raqueta de Tenis
- Gorra F1
- Balon de Futbol
- Balon de Baloncesto`)

let productName = prompt("Ingrese el nombre del producto que esta buscando").toLowerCase();
let findProduct = products.filter (search => search.name === productName);
findProduct.forEach ((search)=>{
let message = `Concidencia de producto: ${search.name}
de la marca: ${search.brand}
el cual tiene un valor de: $${search.precio}
y el stock es de ${search.stock}`
alert(message);
}) 









