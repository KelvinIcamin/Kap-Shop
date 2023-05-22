const product = [
    {
        id: 0,
        image: '6.jpg',
        title: '10 CODM Points',
        price: 10
    },
    {
        id: 1,
        image: '7.jpg',
        title: '20 CODM Points',
        price: 20
    },
    {
        id: 2,
        image: '8.jpg',
        title: '50 CODM Points',
        price: 50
    },
    {
        id: 3,
        image: '9.jpg',
        title: '100 CODM Points',
        price: 100
    },
    {
        id: 4,
        image: '10.jpg',
        title: '200 CODM Points',
        price: 200
    },
    {
        id: 5,
        image: '11.jpg',
        title: '300 CODM Points',
        price: 300
    },
    {
        id: 6,
        image: '12.jpg',
        title: '500 CODM Points',
        price: 500
    },
    {
        id: 7,
        image: '13.jpg',
        title: '1000 CODM Points',
        price: 1000
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



