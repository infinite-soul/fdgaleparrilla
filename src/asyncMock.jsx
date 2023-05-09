


const productos = [
    {
        id: 1,
        nombre: "Paquete A",
        cantidad: 1,
        category: "Pollo",
        descripcion: `1 whole Chicken
        1 chopped Tomato
        2 chopped Onions
        2 chopped Garlic Clove
        1 chopped Red Pepper
        1 chopped Carrots
        1 Lime
        2 tsp Thyme
        1 tsp Allspice
        2 tbs Soy Sauce
        2 tsp Cornstarch
        2 cups Coconut Milk
        1 tbs Vegetable Oil`,
        precioBase: 1000,
        personalRequerido: 3,
        img: "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg"
    },
    {
        id: 2,
        nombre: "Paquete B",
        cantidad: 1,
        category: "Cerdo",
        descripcion: `1.5 pounds sliced Pork
        1 package thin Rice Vermicelli
        4-6 Egg Rolls
        3 tablespoons minced Challots
        1.5 tablespoons minced garlic Garlic
        ¼ cup Sugar
        1 tablespoon Fish Sauce
        ½ tablespoon thick Soy sauce
        ½ tablespoon Pepper
        3 tablespoons Olive Oil
        Sliced Cucumber
        Leaves Mint
        Crushed Peanuts`,
        precioBase: 2000,
        personalRequerido: 5,
        img: "https://www.themealdb.com/images/media/meals/qqwypw1504642429.jpg"
    },
    {
        id: 3,
        nombre: "Paquete C",
        cantidad: 1,
        category: "Res",
        descripcion: `8 slices Beef
        12 florets Broccoli
        1 Packet Potatoes
        1 Packet Carrots
        140g plain flour
        4 Eggs
        200ml milk
        drizzle (for cooking) sunflower oil`,
        precioBase: 1500,
        personalRequerido: 4,
        img: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg'
    }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200);
    });
};

export const getProductoPorId = (idProducto) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === idProducto));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.category === categoryId));
        }, 500);
    });
};

