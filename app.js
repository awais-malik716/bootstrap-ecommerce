let productsBought = 0;



let addToCart = () => {
    
    document.querySelector(".cart-number").innerHTML = productsBought;

    productsBought += 1;

}
