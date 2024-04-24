document.addEventListener('DOMContentLoaded', () => {
    generateCards();
    displayCartItems();
  });

var cardsData = [
    {
        id: 1,
        imgSrc: "./../images/dune2.jpg",
        title: "Dune",
        description: "Frank Herbert’s classic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time.        ",
        price: "Rs 499.49"
    },
    {
        id: 2,
        imgSrc: "./../images/hp5.jpg",
        title: "Harry Potter and the Order of the Phoenix",
        description: "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series.",
        price: "Rs 599.99"
    },
    {
        id: 3,
        imgSrc: "./../images/hp22.jpg",
        title: "Harry Potter and the Chamber of Secrets",
        description: "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys.",
        price: "Rs 549.99"
    },
    {
        id: 4,
        imgSrc: "./../images/twoo2.jpg",
        title: "The Wizard of Oz",
        description: "With stunning illustrations from celebrated artist Charles Santore and a child-friendly, abridged retelling that remains faithful to Frank L. Baum's original text, this Classic Edition of The Wizard of Oz",
        price: "Rs 699.99"
    },
    {
        id: 5,
        imgSrc: "./../images/hobbit2.jpg",
        title: "The Hobbit",
        description: "This is the story of how a baggins had an adventure, and found himself doing and saying things altogether unexpected… bilbo baggins is a Hobbit who enjoys a comfortable.",
        price: "Rs 399.99"
    },
    {
        id: 6,
        imgSrc: "./../images/to.jpg",
        title: "The Outsider",
        description: "If you read only one thriller this summer, make it this one' Daily MailA horrifying crime.Water-tight evidence points to a single suspect.Except he was seventy miles away, with an iron-clad alibi.",
        price: "Rs 499.99"
    }
    
];

function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productToAdd = cardsData.find((product) => product.id === productId);
    cartItems.push(productToAdd);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
    alert(`1 item added to the shopping cart!`);
}

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    cartItems.filter(item => item !== null).forEach((item) => {
        // Check if item has imgSrc property
        if (item.imgSrc) {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
            <div class="card-bought">
            <img class="card-bought-img" src="${item.imgSrc}" alt="${item.title}">
                <div class="card-bought-info">
                    <p class="text-title">${item.title}</p>
                    <p class="text-body">${item.price}</p>
                </div>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
            `;
            cartContainer.appendChild(itemElement);
        } else {
            console.error('Invalid item in cart:', item);
        }
    });
    updateCartTotal(cartItems);
}

function updateCartTotal(cartItems) {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs ', '')), 0);
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.textContent = `Checkout - Total: Rs ${total.toFixed(2)}`;
}
  
function removeFromCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    displayCartItems();
  }

function generateCards() {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';
    
    cardsData.forEach(function(cardData) {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <div class="card">
                <img class="card-img" src="${cardData.imgSrc}" alt="image">
                <div class="card-info">
                    <p class="text-title">${cardData.title}</p>
                    <p class="text-body">${cardData.description}</p>
                </div>
                <div class="card-footer">
                    <span class="text-title">${cardData.price}</span>
                    <div class="card-button">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                    </svg>
                        <button onclick="addToCart(${cardData.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

window.onload = generateCards();