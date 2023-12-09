const product = [
    {
        id: 0,
        image: 'image/Oil.webp',
        title: 'Vanilla Oil',
        price: 3500,
    },
    {
        id: 1,
        image: 'image/im.jpeg',
        title: 'Vanilla Essences',
        price: 850,
    },
    {
        id: 2,
        image: 'image/b_03.webp',
        title: 'Beans',
        price: 4800,
    },
    {
        id: 3,
        image: 'image/Es_02.jpg',
        title: 'Vanilla Extract ',
        price: 950,
    },
    {
        id: 4,
        image: 'image/vp_01.jpg',
        title: 'Vanilla Powder ',
        price: 2000,
    },
    {
        id: 5,
        image: 'image/4.jpg',
        title: 'Vanilla Skin ',
        price: 1150,
    }

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
        <h2>LKR ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "LKR"+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "LKR "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>LKR ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}