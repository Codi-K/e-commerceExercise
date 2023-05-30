let products = [
    {
        id: 1,
        name: "PlayStation 4 Slim",
        image: "https://i.postimg.cc/zBWppPPg/ps4-slim-image-block-01-en-24jul20.webp",
        price: "R6999"

    },
    {
        id: 2,
        name: "Gran Turismo 7 PS4",
        image: "https://i.postimg.cc/L86CRDhc/gran-turismo-7-ps4-box-front.webp",
        price: "R999"

    },
    {
        id: 3,
        name: "God of War Raganarok PS4",
        image: "https://i.postimg.cc/L86CRDhc/gran-turismo-7-ps4-box-front.webp",
        price: "R999"

    },
    {
        id: 4,
        name: "Horizon Forbidden West PS5",
        image: "https://i.postimg.cc/L86CRDhc/gran-turismo-7-ps4-box-front.webp",
        price: "R999"

    },
    {   
        id: 5,
        name: "The Last of Us Part 1 PS5",
        image: "https://i.postimg.cc/L86CRDhc/gran-turismo-7-ps4-box-front.webp",
        price: "R999"

    },
    {
        id: 6,
        name: "PlayStation 5",
        image: "https://i.postimg.cc/zBWppPPg/ps4-slim-image-block-01-en-24jul20.webp",
        price: "R11299"
    }
]

let productList = document.querySelector(".java");
    products.forEach((data)=>{
        productList.innerHTML =`
        <div>
        <img src="${products[0].image}" alt="PS4" width="100rem">
        </div>
        `
    })
    


