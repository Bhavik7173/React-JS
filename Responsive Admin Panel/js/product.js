let productData = [];
let showCartData = [];
let customerData = [];

let uId = sessionStorage.getItem('uid');
console.log(uId)

let scURL = 'http://localhost:3000/cart';
fetch(scURL)
    .then(res => res.json())
    .then(data => {
        let flag = 0;
        for (let i = 0; i < data.length; i++) {
            
            if (uId == data[i].uID  ) {
                let cart = data[i];
                console.log("Show cart:", data[i]);
                showCartData.push(cart);
                flag = 1;
            }
        }
        if (flag == 0) {
            console.log("cart is empty");
        }
        displayCart();
    })
    .catch(err => console.log(err))

// Product fetching code
purl = "http://localhost:3000/products";
fetch(purl)
    .then(res => res.json())
    .then(data => { display(data); productData = data })
    .catch(err => console.log(err))

// Customer Fetching Code
curl = "http://localhost:3000/users";
fetch(curl)
    .then(res => res.json())
    .then(data => { customerdisplay(data); customerData = data })
    .catch(err => console.log(err))

function display(data) {

    console.log(data);
    pmsg = "";

    for (let i = 0; i < data.length; i++) {

        let row = data[i];
        pmsg += "<tr>";

        pmsg += "<td>" + row.id + "</td>";
        pmsg += "<td>" + row.productName + "</td>";
        pmsg += "<td>$" + row.price + "</td>";
        pmsg += "<td>" + row.payment + "</td>";
        if (row.status == "In Progress") {
            pmsg += "<td><span class='status inprogress'>" + row.status + "</span></td>";
        }
        else {
            pmsg += "<td><span class='status " + row.status + "'>" + row.status + "</span></td>";
        }
        pmsg += "<td> <a href='#' onClick=addToCart(" + i + ")><ion-icon name='cart-outline'></ion-icon></a> </td>";

        pmsg += "</tr>";
    }


    document.getElementById("product_table").innerHTML = pmsg;
}

function addToCart(index) {

    tempData = productData[index]
    let totalAmount = tempData.price * 5;
    temp = { 'uID': uId, 'productId': tempData.productId, 'productName': tempData.productName, 'quanity': 5, 'totalAmount': totalAmount }
    console.log(productData[index]);
    
    url1 = 'http://localhost:3000/cart';
    fetch(url1, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(temp)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}




function displayCart() {
    let msg = "<table border=2 cellpadding=5>";
    console.log('in disp', showCartData);
    for (let i = 0; i < showCartData.length; i++) {

        let row = showCartData[i];
        msg += "<tr>";

        msg += "<td>" + row.id + "</td>";
        msg += "<td>" + row.uID + "</td>";
        msg += "<td>" + row.productName + "</td>";
        msg += "<td>" + row.quanity + "</td>";
        msg += "<td>" + row.totalAmount + "</td>";

        msg += "</tr>";
    }

    msg += "</table>";
    document.getElementById("cart_display").innerHTML = msg;
}

function customerdisplay(data) {

    console.log(data);
    msg = "";

    for (let i = 0; i < data.length; i++) {

        let row = data[i];
        msg += "<tr>";

        msg += "<td>" + row.id + "</td>";
        msg += "<td>" + row.userName + "</td>";
        msg += "<td>" + row.userEmail + "</td>";
        msg += "<td>" + row.mobile + "</td>";
        msg += "<td>" + row.city + "</td>";
        msg += "<td>" + row.userPass + "</td>";
        msg += "</tr>";
    }


    document.getElementById("customer_table").innerHTML = msg;
}
