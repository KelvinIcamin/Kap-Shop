const product = [
    {
        id: 0,
        image: '41.jpg',
        title: '5 Diamonds',
        price: 5
    },
    {
        id: 1,
        image: '42.jpg',
        title: '11 Diamonds',
        price: 9.50
    },
    {
        id: 2,
        image: '43.jpg',
        title: '22 Diamonds',
        price: 19
    },
    {
        id: 3,
        image: '44.jpg',
        title: '56 Diamonds',
        price: 47.50
    },
    {
        id: 4,
        image: '45.jpg',
        title: '112 Diamonds',
        price: 95
    },
    {
        id: 5,
        image: '46.jpg',
        title: '223 Diamonds',
        price: 190
    },
    {
        id: 6,
        image: '47.jpg',
        title: '333 Diamonds',
        price: 285
    },
    {
        id: 7,
        image: '48.jpg',
        title: '570 Diamonds',
        price: 475
    },
    {
        id: 8,
        image: '49.jpg',
        title: '1063 Diamonds',
        price: 950
    },
    {
        id: 9,
        image: '50.jpg',
        title: '2398 Diamonds',
        price: 1900
    },
    {
        id: 10,
        image: '51.jpg',
        title: '6042 Diamonds',
        price: 4750
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>₱${price}</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
            `</div>
            </div>`
    )
}).join('')

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₱ "+0+"";

    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var{image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₱ "+total+"";
            return(
                `<div class = 'cart-item'>
                <div class = 'row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>₱${price}</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('')
    }
        
}



