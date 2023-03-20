url = "http://localhost:3000/products";
let productData = [];
let showCartData = [];
let uId = sessionStorage.getItem('userId');
fetch(url)
.then(res=>res.json())
.then(data=>{display(data);productData=data})
.catch(err=>console.log(err))

function display(data)
{
    
    console.log(data);
    msg = "";
    msg +="<table border=2 cellpadding=5>";

    msg += "<tr>";
    msg += "<th> ID </th>";
    msg += "<th> Product Id </th>";
    msg += "<th> Product Name </th>";
    msg += "<th> Product Quantity </th>";
    msg += "<th> company </th>";
    msg += "<th> Price </th>";
    msg += "<th> offer </th>";
    msg += "<th> Add to Cart </th>";

    for(let i=0;i<data.length;i++)
    {
        
        let row = data[i];
        msg += "<tr>";

        msg += "<td>"+ row.id +"</td>";
        msg += "<td>"+ row.productId +"</td>";
        msg += "<td>"+ row.productName +"</td>";
        msg += "<td>"+ row.quantity +"</td>";
        msg += "<td>"+ row.company +"</td>";
        msg += "<td>"+ row.price +"</td>";
        msg += "<td>"+ row.offer +"</td>";
        msg += "<td> <a href='#' onClick=addToCart("+i+")><img src='shopping-cart.png' height='20px' weight='20px'></a> </td>";
        
        msg += "</tr>";
    }

    msg +="</table>"

    document.getElementById("home").innerHTML=msg;
}

function addToCart(index)
{
    
    tempData=productData[index]
    let totalAmount = tempData.price * 5;
    temp = { 'uId':uId, 'pId':tempData.id, 'productId':tempData.productId, 'productName':tempData.productName,'quanity':5,'totalAmount':totalAmount}
    //console.log(productData[index]);
    url1='http://localhost:3000/cart';
    fetch(url1, {
        method:"POST",
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(temp)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    

}

function showCart()
{
    flag=0;
    scURL= 'http://localhost:3000/cart';
    fetch(scURL)
    .then(res=>res.json())
    .then(data=>{
            for(let i=0;i<data.length;i++)
                {
                    if(uId==data[i].uId)
                    {
                        let cart = data[i];
                        console.log("SHow cart:",data[i]);
                        showCartData.push(cart);
                        flag=1;
                    }
                }
                if(flag==0)
                {
                    console.log("cart is empty");
                }
                displayCart();
        })
    .catch(err=>console.log(err))

}
function displayCart()
{
    let msg = "<table border=2 cellpadding=5>";
    console.log('in disp',showCartData);
    for(let i=0;i<showCartData.length;i++)
    {
            
        let row = showCartData[i];
        msg += "<tr>";

        msg += "<td>"+ row.id +"</td>";
        msg += "<td>"+ row.productId +"</td>";
        msg += "<td>"+ row.productName +"</td>";
        msg += "<td>"+ row.quanity +"</td>";
        msg += "<td>"+ row.totalAmount +"</td>";
        
        msg += "</tr>";
    }

    msg +="</table>";
    document.getElementById("cart_display").innerHTML=msg;
}
