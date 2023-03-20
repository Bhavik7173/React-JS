let url = "http://localhost:3000/users";

let totalusers = 0;
let totalproducts = 0;

let urlcount = "http://localhost:3000/count";
fetch(urlcount)
.then(res=>res.json())
.then(data=>{
    totalusers=data[0].totalUsers;
    totalproducts=data[1].totalProducts;
    console.log(data);
    console.log("from load",(totalusers));
    console.log("from load",(totalproducts));
})
.catch(err=>console.log(err));

function register()
{
    let userId = document.getElementById("userId").value
    let userName = document.getElementById("userName").value
    let userEmail = document.getElementById("userEmail").value
    let userPass = document.getElementById("userPass").value
    let userMobile = document.getElementById("userMobile").value
    let userCity = document.getElementById("userCity").value

    let temp = {'id':totalusers+1, 'userId': userId, 'userName':userName, 'userPass':userPass, 'userCity':userCity, 'userMobile':userMobile, 'userEmail':userEmail};
    
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(temp)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        console.log("from fetch",(totalusers+1));
        updateUserCount(totalusers+1)
    })
    .catch(err=>console.log(err))
}

function updateUserCount(cnt)
{
    let nurl=urlcount+ "/1";
    temp={"id":1, "totalUsers":cnt}
    console.log(temp);

    fetch(nurl,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(temp)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

function login()
{
    fetch(url)
    .then(res=>res.json())
    .then(data=> checkUserEmailAndPassword(data))
    .catch(err=>console.log(err));
}

function checkUserEmailAndPassword(users)
{
    console.log("registred users :",users)
    let userEmail = document.getElementById("userEmail").value
    let userPass = document.getElementById("userPass1").value
    console.log("Entered email and password:",userEmail,userPass)
    flag = false;

    for(let i=0; i<users.length; i++)
    {
        let user = users[i];
        console.log(user);
        if(user.userEmail == userEmail && user.userPass == userPass)
        {   
            console.log("login done");
            sessionStorage.setItem('userEmail',user.userEmail)
            sessionStorage.setItem('userName',user.userName)
            sessionStorage.setItem('userId',user.id)
            sessionStorage.setItem('userCity',user.city)
            sessionStorage.setItem('userMobile',user.mobile)
            flag=true;
            window.location.href = 'home.html';
            break
        }

    }
    if(flag==false)
    {
        alert("email and passwors not match")
    }
   
    
}

