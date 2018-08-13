var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name){
  cart.push({itemName: `${name}`, itemPrice: Math.floor(Math.random() * 100)});
  return `${name} has been added to your cart.`;
}

function viewCart(){
  if (getCart().length === 0){
    return "Your shopping cart is empty.";
  }
  else if (getCart().length === 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }
  else {
    var output = [];
    for (let i = 0; i < getCart().length; i++){
      output.push(`${getCart()[i].itemName} at ${getCart()[i].itemPrice}`);
      return `In your cart, you have ${output}`;
    }
  }
}