let main_email = "b@gmail.com"
let main_pass = "b@123"

let purl = "http://localhost:3000/products"
let product = []
let user = []

let uurl = "http://localhost:3000/users"

let curl = "http://localhost:3000/cart"

fetch(uurl)
    .then(res => res.json())
    .then(data => {
        user = data;
    })
    .catch(err => console.log(err))

fetch(purl)
    .then(res => res.json())
    .then(data => {
        product = data
        display()
    })
    .catch(err => console.log(err))

function submit() {
    let uemail = document.getElementById("uemail").value
    let upassword = document.getElementById("upassword").value

    if (uemail == main_email && upassword == main_pass) {
        console.log("Successfully Done !!!")
        // window.location.href = "home.html"
        document.location.href = "home.html"
        sessionStorage.setItem("uemail", uemail)
        sessionStorage.setItem("upass", main_pass)

    }
}

function display() {
    let msg = "<table border=2 cellpadding=5>";
    for (let i = 0; i < product.length; i++) {
        // console.log(product[i].productName)
        let row = product[i];
        msg += "<tr>";

        msg += "<th scope='row'>" + row.id + "</th>";
        msg += "<td>" + row['productId'] + "</td>";
        msg += "<td>" + row['productName'] + "</td>";
        msg += "<td>" + row['quantity'] + "</td>";
        msg += "<td>" + row['company'] + "</td>";
        msg += "<td>" + row['price'] + "</td>";
        msg += "<td>" + row['offer'] + "</td>";
        msg += "<td><a href='#' onclick=addCart(" + i + ")><i class='fa fa-shopping-cart' style='font-size:30px'>Add To Cart</i></a></td>";
        msg += "</tr>";
    }
    msg += "</table>";
    document.getElementById("display_data").innerHTML = msg;
}

function addCart(index) {
    let uemail = sessionStorage.getItem("uemail");
    console.log(index+1);
    for(let i=0;i<product.length;i++)
    {
        if(index+1 == product[i].id)
        {
            
            totalamt = 5 * product[i].price
           
        }
    }
    
    let temp = { "uemail":uemail, "pid":index+1, "quantity":5, "totalamt":totalamt};
    console.log(temp)
    fetch(curl,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(temp)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
