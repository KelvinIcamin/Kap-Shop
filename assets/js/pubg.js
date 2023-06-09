const product = [
    {
        id: 0,
        image: '58.jpg',
        title: '60 Unknown Cash',
        price: 50
    },
    {
        id: 1,
        image: '59.jpg',
        title: '325 Unknown Cash',
        price: 249
    },
    {
        id: 2,
        image: '60.jpg',
        title: '660 Unknown Cash',
        price: 499
    },
    {
        id: 3,
        image: '61.jpg',
        title: '1800 Unknown Cash',
        price: 1249
    },
    {
        id: 4,
        image: '62.jpg',
        title: '3850 Unknown Cash',
        price: 2499
    },
    {
        id: 5,
        image: '63.jpg',
        title: '8100 Unknown Cash',
        price: 4999
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



