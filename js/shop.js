// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            console.log(cartList);
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    
    // update cart modal
    document.getElementById('count_product').innerHTML = 0;
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (i = 0; i <= cartList.length; i++) {
        total += (cartList[i].price).toFixed(2);
    }
    console.log('El total de la compra es ' + total);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // first step, sort the "cartList" by id
    cartList.sort((a, b) => {
        return a.id - b.id;
    });
    for (i = 0; i < cartList.length; i++) {
        // check if cart is empty or not
        if (cart.length < 1) {
            cart.push(cartList[i]);
            cart[0].quantity = 1;
            // compare the ids
        } else if (cartList[i].id === cartList[i - 1].id) {
            cart[cart.length - 1].quantity += 1;
        } else {
            cart.push(cartList[i]);
            cart[cart.length - 1].quantity = 1;
        }
    }
    console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    total = 0;
    // oil discount: can only apply to id(1)
    for (i = 0; i < cart.length; i++) {
        cart[i].subtotal = 0;
        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = ((cart[i].price * cart[i].quantity) - 10).toFixed(2);
            console.log("El preu amb descompte de l'oli és de " + cart[i].subtotalWithDiscount);
        } else if (cart[i].name === 'cooking oil' && cart[i].quantity < 3) {
                cart[i].subtotal = (cart[i].price * cart[i].quantity).toFixed(2);
                cart[i].subtotalWithDiscount = undefined;
            // cake products: can only apply to id(3)
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = (((cart[i].price * cart[i].quantity) * 2) / 3).toFixed(2);
        } else if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity < 10) {
            cart[i].subtotal = (cart[i].price * cart[i].quantity).toFixed(2);
            cart[i].subtotalWithDiscount = undefined;
        } else {
            cart[i].subtotal = (cart[i].price * cart[i].quantity).toFixed(2);
            cart[i].subtotalWithDiscount = undefined;
        }
        console.log(cart[i].subtotal);
        console.log(cart[i].subtotalWithDiscount);
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    applyPromotionsCart();
    total = 0;
    let textCart = '';

    for (let i = 0; i < cart.length; i++) {
        textCart += '<tr>';
        textCart += '<th scope="row">' + cart[i].name + '</th>';
        textCart += '<td>' + cart[i].price + '</td>';
        textCart += '<td>' + cart[i].quantity + '</td>';
        if (cart[i].subtotalWithDiscount == undefined) {
            textCart += '<td>' + '$' + cart[i].subtotal + '</td>';
            total += Number(cart[i].subtotal);
            console.log(total);
        } else {
            textCart += '<td>' + '$' + cart[i].subtotalWithDiscount + '</td>';
            total += Number(cart[i].subtotalWithDiscount);
            console.log(total);
        }
        textCart += '</tr>';
    }
    document.getElementById('cart_list').innerHTML = textCart;
    document.getElementById('total_price').innerHTML = (total).toFixed(2);
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    // find the index of the product the client is adding to the cart
    let clientItem = products[id -1];

    //find the index of the product in the cart
    let cartProductIndex = cart.findIndex(cartItem => cartItem.id === clientItem.id);
    // console.log(cartProductIndex);

    if (cartProductIndex == -1) {
        clientItem.subtotalWithDiscount = clientItem.price;
        clientItem.quantity = 1;
        cart.push(clientItem);
    } else {
        cart[cartProductIndex].quantity++;
    }
    console.log(cart);

    // update cart quantity on cart icon
    let counter = 0;
    for (let i = 0; i < cart.length; i++) {
        counter += cart[i].quantity;
    } 
    document.getElementById('count_product').innerHTML = counter;

}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let indexItem = cart.findIndex (item => item.id === id);

    if (indexItem == -1) {
        alert("The item you're trying to remove is not in your cart.")
    } else {
        if (cart[indexItem].quantity > 1) {
            cart[indexItem].quantity--;
            console.log(cart);
        } else {
            cart.splice(indexItem, 1);
        }
    }

    // update cart quantity on cart icon
    let counter = 0;
    for (let i = 0; i < cart.length; i++) {
        counter += cart[i].quantity;
    } 
    document.getElementById('count_product').innerHTML = counter;
    // console.log(cart);
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}