let counturl = "http://localhost:3000/count";
let url = "http://localhost:3000/products";
let uurl = "http://localhost:3000/users"
let curl = "http://localhost:3000/cart"

let product = []
let carts= []
let totalusers = 0;
let totalproducts = 0;
let totalCarts = 0;
let uid = 0;
fetch(url)
    .then(res => res.json())
    .then(data => {
        product = data;
        myload();
        uid = window.sessionStorage.getItem("uid");
    })
    .catch(err => console.log(err))

fetch(counturl)
    .then(res => res.json())
    .then(data => {
        totalusers = data[0].totalUsers
        totalproducts = data[1].totalProducts
        totalCarts = data[2].totalCarts
        console.log("From load", totalCarts);
    })
    .catch(err => console.log(err))

fetch(curl)
    .then(res => res.json())
    .then(data => {
        
        let flag = 0;
        uid = window.sessionStorage.getItem("uid");
        for(let i=0;i<data.length;i++)
        {
            let cart = data[i];
            if(cart.uid == uid)
            {
                carts.push(cart)
                
                flag = 1;
            }
        }

        if(flag == 0)
        {
            console.log("Not Found");
        }
        myCart();
        console.log("load=> ",carts);
    })
    .catch(err => console.log(err))

function updateCartCount(cnt) {
    let ucountUrl = counturl + "/3"
    temp = { "id": 3, "totalCarts": cnt }
    console.log(temp);
    fetch(ucountUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

}
function myload() {
    let msg = "<table border=2 cellpadding=5>";
    for (let i = 0; i < product.length; i++) {
        // console.log("From load", product);
        let row = product[i];
        msg += "<tr>";

        msg += "<th scope='row'>" + row.id + "</th>";
        msg += "<td>" + row['productId'] + "</td>";
        msg += "<td>" + row['productName'] + "</td>";
        msg += "<td>" + row['quantity'] + "</td>";
        msg += "<td>" + row['company'] + "</td>";
        msg += "<td>" + row['price'] + "</td>";
        msg += "<td>" + row['offer'] + "</td>";
        msg += "<td><a href='#' onclick=updateData(" + i + ")><i class='material-icons' style='font-size:30px'>edit</i></a></td>";
        msg += "<td><a href='#' onclick=deleteRecord(" + i + ")><i class='material-icons' style='font-size:30px'>delete</i></a></td>";
        msg += "<td><a href='#' onclick=addCart(" + i + ")><i class='fa fa-shopping-cart' style='font-size:30px'></i></a></td>";
        msg += "</tr>";
    }
    msg += "</table>";
    document.getElementById("display").innerHTML = msg;
}
function serachproduct() {
    let flg = 0;
    let name = document.getElementById("searchProduct").value
    console.log(name)
    let msg = "<table border=2 cellpadding=5>";

    for (let i = 0; i < product.length; i++) {
        if (name == product[i].productName || name == product[i].productId || name == product[i].quantity || name == product[i].company || name == product[i].price || name == product[i].offer) {
            console.log(product[i].productName)
            // let row = product[i];
            msg += "<tr>";

            msg += "<th scope='row'>" + product[i].id + "</th>";
            msg += "<td>" + product[i].productId + "</td>";
            msg += "<td>" + product[i].productName + "</td>";
            msg += "<td>" + product[i].quantity + "</td>";
            msg += "<td>" + product[i].company + "</td>";
            msg += "<td>" + product[i].price + "</td>";
            msg += "<td>" + product[i].offer + "%</td>";
            msg += "<td><a href='#' onclick=updateData(" + i + ")><i class='material-icons' style='font-size:30px'>edit</i></a></td>";
            msg += "<td><a href='#' onclick=deleteRecord(" + i + ")><i class='material-icons' style='font-size:30px'>delete</i></a></td>";
            msg += "<td><a href='#' onclick=addCart(" + i + ")><i class='fa fa-shopping-cart' style='font-size:30px'></i></a></td>";

            msg += "</tr>";
            document.getElementById("display").innerHTML = msg
            flg = 1;
        }
    }
    msg += "</table>"
    if (flg == 0) {
        alert("Record is not found!!")
    }

}

function addCart(id) {
    console.log("Product_ID===>", id);
    let person = prompt("Enter the quantity of product which you wat to buy", "");
    if (person == null || person == "") {
        console.log("Null")
    } else {
        console.log("quantity===>", person)

        let totalPrice = 0;
        let flg = 0;
        for (let i = 0; i < product.length; i++) {
            if (id == product[i].id) {
                tmpPrice = product[i].price - (product[i].price * product[i].offer * 0.01);
                totalPrice = tmpPrice * person;
                flg = 1;
                let temp = { "uid": uid, "PID": id + 1, "quantity": person, "totalamt": totalPrice };
                insertCart(temp)
                break;
            }
        }

        if (flg == 0) {
            alert("Record is not found!!")
        }
    }
}

function insertCart(temp) {
    let curl = "http://localhost:3000/cart";
    fetch(curl, {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(temp)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            updateCartCount(totalCarts + 1);
            // fetchdata();
            alert("Successfully Add To Cart")
        })
        .catch(err => console.log(err));
}

function openPage(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

function logout() {
    window.sessionStorage.removeItem("uid");
    window.sessionStorage.clear();
    window.location.href = "index.html"
}


fetch(uurl)
    .then(res => res.json())
    .then(data => myaccount(data))
    .catch(err => console.log(err))

function myaccount(data) {
    {

        flag = false;
        for (let i = 0; i < data.length; i++) {
            let datas = data[i];
            if (datas.id == uid) {
                console.log("login done!!!");
                console.log("Data===>", datas)
                setData(datas);
                flag = true;
                break;
            }
        }
        if (flag == false) {
            alert("Please Check the Credentials!!");
        }
    }

}

function setData(datas) {

    document.getElementById("firstName").value = datas.userId
    document.getElementById("lastName").value = datas.userName
    document.getElementById("emailAddress").value = datas.userEmail
    document.getElementById("password").value = datas.userPassword
    if (datas.userCity != null) {
        document.getElementById("city").disabled = false
        document.getElementById("city_label").value = datas.userCity
        document.getElementById("city").disabled = true
    }

    document.getElementById("femaleGender").value = datas.gender
    if (datas.gender == "Female") {
        document.getElementById("femaleGender").checked = datas.gender
        document.getElementById("maleGender").disabled = true
        document.getElementById("otherGender").disabled = true
    } else if (datas.gender == "Male") {
        document.getElementById("femaleGender").disabled = true
        document.getElementById("maleGender").checked = datas.gender
        document.getElementById("otherGender").disabled = true
    }
    else if (datas.gender == "Other") {
        document.getElementById("femaleGender").disabled = true
        document.getElementById("otherGender").checked = datas.gender
        document.getElementById("maleGender").disabled = true
    }

    document.getElementById("phoneNumber").value = datas.userPhone
}

function myCart()
{
    console.log("Carts:",carts)
    let msg = "<table border=2 cellpadding=5>";
    for (let i = 0; i < carts.length; i++) {
        let row = carts[i];
        msg += "<tr>";
        let v = i + 1;
        msg += "<th scope='row'>" + v + "</th>";
        msg += "<td>" + row['PID'] + "</td>";
        msg += "<td>" + row['quantity'] + "</td>";
        msg += "<td>" + row['totalamt'] + "</td>";
        msg += "<td><a href='#' onclick=updateData(" + i + ")><i class='material-icons' style='font-size:30px'>edit</i></a></td>";
        msg += "<td><a href='#' onclick=deleteRecord(" + i + ")><i class='material-icons' style='font-size:30px'>delete</i></a></td>";
        // msg += "<td><a href='#' onclick=addCart(" + i + ")><i class='fa fa-shopping-cart' style='font-size:30px'></i></a></td>";
        msg += "</tr>";
    }
    msg += "</table>";
    document.getElementById("cart_display").innerHTML = msg;
}