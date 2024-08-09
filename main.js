// products start

let product = [
    {
        "id": 1,
        "imgSrc": "sho2.png",
        "material": "fabric, foam, and rubber",
        "color": "Yellow,black,blue",
        "Price": 8500,
        "AddtocartbtnBG": "linear-gradient(135deg, rgba(0, 3, 2, 1) 0%, rgba(0, 255, 239, 1) 100%)",
        "imgSectionBG": "linear-gradient(135deg, rgba(0, 3, 2, 1) 0%, rgba(0, 255, 239, 1) 100%)",
        "transform": "(-10deg)",
        "width": "450px"
    },
    {
        "id": 2,
        "imgSrc": "shoes3.png",
        "material": "fabric and foam",
        "color": "Black ",
        "Price": 8000,
        "AddtocartbtnBG": "linear-gradient(135deg, rgb(41, 41, 41) 0%, rgb(41, 41, 41) 100%)",
        "imgSectionBG": "linear-gradient(135deg, rgb(41, 41, 41) 0%, rgb(45, 45, 45) 100%)",
        "transform": "(-30deg)"
    },
    {
        "id": 3,
        "imgSrc": "sho4.png",
        "material": "fabric and foam",
        "color": "Sea Green",
        "Price": 9000,
        "AddtocartbtnBG": "linear-gradient(135deg, rgba(0, 86, 128, 1) 0%, rgb(209, 237, 255) 100%)",
        "imgSectionBG": "linear-gradient(135deg, rgba(0, 86, 128, 1) 0%, rgb(209, 237, 255) 100%)",
        "transform": "(-30deg)"
    },
    {
        "id": 4,
        "imgSrc": "SHO2-removebg-preview.png",
        "material": "fabric and foam",
        "color": "White",
        "top": "10%",
        "Price": 9900,
        "AddtocartbtnBG": "linear-gradient(135deg, rgb(165, 168, 169) 0%, rgb(213, 220, 224) 100%)",
        "imgSectionBG": "linear-gradient(135deg, rgb(165, 168, 169) 0%, rgb(213, 220, 224) 100%)",
        "transform": "(-30deg)",
        "width": "350px"
    },
    {
        "id": 5,
        "imgSrc": "freepik-export-202408090324181Ztt.png",
        "material": "fabric and foam",
        "color": "White,Orange",
        "top": "20%",
        "Price": 1000,
        "AddtocartbtnBG": "linear-gradient(135deg, rgb(189, 197, 201) 0%, rgb(157, 209, 254) 100%)",
        "imgSectionBG": "linear-gradient(135deg, rgb(189, 197, 201) 0%, rgb(157, 209, 254) 100%)",
        "transform": "(0deg)",
        "width": "440px"
    },
    {
        "id": 6,
        "imgSrc": "SHO5-removebg-preview.png",
        "material": "fabric and foam",
        "color": "White,Orange",
        "top": "35%",
        "Price": 11000,
        "AddtocartbtnBG": "linear-gradient(135deg, rgb(41, 41, 41) 0%, rgb(208, 208, 208) 100%) ",
        "imgSectionBG": "linear-gradient(135deg, rgb(41, 41, 41) 0%, rgb(208, 208, 208) 100%)",
        "transform": "(-30deg)",
        "width": "380px"
    },
]
// products end
console.log(product);


const cardtemplate = document.querySelector(".cardtemplate");
const cardContainer = document.querySelector(".card-container");


product.forEach((ProEle) => {
    let { id, imgSrc, material, color, Price, AddtocartbtnBG, imgSectionBG, transform, width, top } = ProEle;

    const productClone = document.importNode(cardtemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".card-img-section").style.background = imgSectionBG;
    productClone.querySelector(".card-main-img").src = imgSrc;
    productClone.querySelector(".card-main-img").style.transform = `rotateZ${transform}`;
    productClone.querySelector(".card-main-img").style.top = top;
    productClone.querySelector(".card-main-img").style.width = width;
    productClone.querySelector(".Product-color").innerText = `Color: ${color}`;
    productClone.querySelector(".Product-material").innerText = `Material: ${material}`;
    productClone.querySelector(".product-price").innerText = `Price: ${Price}`;
    productClone.querySelector(".Addtocartbtn").style.background = AddtocartbtnBG;




    productClone.querySelector(".Addtocartbtn").addEventListener("click", (evt) => {
        addCardDataToLS(evt, id);
    });


    cardContainer.append(productClone);
});


let productArr = [];

const addCardDataToLS = (evt, id) => {
    const PresentProduct = document.querySelector(`#card${id}`)


    // console.log(PresentProduct);

    let price = PresentProduct.querySelector(".product-price").innerText;
    let imgSrc = PresentProduct.querySelector(".card-main-img").src;
    let shoesColor = PresentProduct.querySelector(".Product-color").innerText;
    let shoesMaterial = PresentProduct.querySelector(".Product-material").innerText;
    console.log(price);
    console.log(imgSrc);
    console.log(shoesColor);
    console.log(shoesMaterial);


    
    let productDataArr = {id,price,shoesColor,imgSrc,shoesMaterial};
    productArr.push(productDataArr);
    localStorage.setItem("productDetails", JSON.stringify(productArr));
    cartValue.innerText = productArr.length;
}
let objstr = localStorage.getItem("productDetails");
if(objstr != null){
    productArr=JSON.parse(objstr);
}

const cartValue = document.querySelector('.cartValue');

cartValue.innerText = productArr.length;
