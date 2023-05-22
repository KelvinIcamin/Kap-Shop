const product = [
    {
        id: 0,
        image: '71.jpg',
        title: '100 Wild Cores',
        price: 47.50
    },
    {
        id: 1,
        image: '72.jpg',
        title: '305 Wild Cores',
        price: 142.50
    },
    {
        id: 2,
        image: '73.jpg',
        title: '535 Wild Cores',
        price: 237.50
    },
    {
        id: 3,
        image: '74.jpg',
        title: '1100 Wild Cores',
        price: 475
    },
    {
        id: 4,
        image: '75.jpg',
        title: '1725 Wild Cores',
        price: 712.50
    },
    {
        id: 5,
        image: '76.jpg',
        title: '3000 Wild Cores',
        price: 1187.50
    },
    {
        id: 6,
        image: '77.jpg',
        title: '6125 Wild Cores',
        price: 2375
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



