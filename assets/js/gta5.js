const product = [
    {
        id: 0,
        image: '30.jpg',
        title: 'GTA$100,000',
        price: 152.52
    },
    {
        id: 1,
        image: '31.jpg',
        title: 'GTA$200,000',
        price: 254.82
    },
    {
        id: 2,
        image: '32.jpg',
        title: 'GTA$500,000',
        price: 510.57
    },
    {
        id: 3,
        image: '33.jpg',
        title: 'GTA$1,250,000',
        price: 1022.07
    },
    {
        id: 4,
        image: '34.jpg',
        title: 'GTA$3,500,000',
        price: 2556.57
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



