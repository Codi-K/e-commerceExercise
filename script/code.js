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
        image: "https://i.postimg.cc/sDJ6tqfP/ps4-god-of-war-ragnarok-launch-edition-box-front.webp",
        price: "R999"

    },
    {
        id: 4,
        name: "Horizon Forbidden West PS5",
        image: "https://i.postimg.cc/rwnhp4rK/horizon-forbidden-west-ps5-launch-box-front.webp",
        price: "R999"

    },
    {   
        id: 5,
        name: "The Last of Us Part 1 PS5",
        image: "https://i.postimg.cc/X7W114W7/ps5-tlou-part-1-game-box-front.webp",
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
        productList.innerHTML +=`
        <div class=" box">
        <img src="${data.image}" class="card-img-top" alt="${data.name}">
            <div class="card-body text-light">
                    <h5 class="card-title">${data.name}</h5>
                    <p>${data.price}</p>
            </div>
        </div>
        `
    })
    


