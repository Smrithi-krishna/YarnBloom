

/* SEARCH */

function searchProducts(){

    let input = document.getElementById("searchInput").value.toUpperCase();

    let cards = document.getElementsByClassName("product-card");

    for(let i=0;i<cards.length;i++){

        let title = cards[i].getElementsByTagName("h3")[0];

        if(title.innerHTML.toUpperCase().indexOf(input)>-1){

            cards[i].style.display="block";

        }

        else{

            cards[i].style.display="none";

        }

    }

}

/* FILTER */

function filterProducts(category){

    let cards=document.getElementsByClassName("product-card");

    for(let i=0;i<cards.length;i++){

        if(category=="all"){

            cards[i].style.display="block";

        }

        else if(cards[i].classList.contains(category)){

            cards[i].style.display="block";

        }

        else{

            cards[i].style.display="none";

        }

    }

}



let cart = [];
let wishlist = [];

function toggleCart(){

    document
    .getElementById("cartSidebar")
    .classList.toggle("active");

}

function toggleWishlist(){

    document
    .getElementById("wishlistSidebar")
    .classList.toggle("active");

}

function addToCart(name,price){

    cart.push({name,price});

    document.getElementById("cartCount").innerText =
    cart.length;

    let html="";

    cart.forEach(item=>{

        html+=`
        <div class="cart-item">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
        </div>
        `;

    });

    document.getElementById("cartItems").innerHTML=html;

}

function addWishlist(btn,name){

    btn.style.background="#5A2D3B";
    btn.style.color="white";
    btn.innerHTML="❤️ Added";

    wishlist.push(name);

    document.getElementById("wishlistCount").innerText =
    wishlist.length;

    let html="";

    wishlist.forEach(item=>{

        html+=`
        <div class="cart-item">
            <h4>${item}</h4>
        </div>
        `;

    });

    document.getElementById("wishlistItems").innerHTML=html;

}