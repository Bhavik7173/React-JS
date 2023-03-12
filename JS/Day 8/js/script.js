let url = "http://localhost:3000/users";
let totalusers = 0;
let totalproducts = 0;
let tempEmail = " "

let counturl = "http://localhost:3000/count";
fetch(counturl)
    .then(res => res.json())
    .then(data => {
        totalusers = data[0].totalUsers
        totalproducts = data[1].totalProducts
        console.log("From load", totalproducts);
        console.log("From load", totalusers);
    })
    .catch(err => console.log(err))

function updateUserCount(cnt) {
    let ucountUrl = counturl + "/1"
    temp = { "id": 1, "totalUsers": cnt }
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
function login() {
    fetch(url)
        .then(res => res.json())
        .then(data => { checkCredential(data); })
        .catch(err => console.log(err))
}

function checkCredential(data) {

    console.log("registered users ... ", data);

    let useremail = document.getElementById("userEmail").value
    let userpassword = document.getElementById("userPassword").value
    flag = false
    for (let i = 0; i < data.length; i++) {
        let datas = data[i];
        if (datas.userEmail == useremail && datas.userPassword == userpassword) {
            console.log("login done!!!");
            flag = true;
            window.location.href = "home.html"
            break;
        }
    }
    if (flag == false) {
        alert("Please Check the Credentials!!");
    }
}

function register() {

    console.log("From register", (totalusers + 1));
    console.log("signup clicked...");

    let userid = document.getElementById("uid").value
    let username = document.getElementById("uname").value
    let useremail = document.getElementById("uemail").value
    let usermobile = document.getElementById("umobile").value
    let userpassword = document.getElementById("upassword").value
    let usercpassword = document.getElementById("ucpassword").value
    let usercity = document.getElementById("ucity").value

    if (userpassword == usercpassword) {

        let temp = {
            'id': totalusers + 1, 'userId': userid, 'userName': username, 'userMobile': usermobile
            , 'userCity': usercity, 'userEmail': useremail, 'userPass': userpassword
        }

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp)
        })
            .then(res => res.json())
            .then(data => {
                console.log("From fetch", totalusers + 1);
                console.log(data);
                updateUserCount(totalusers + 1);
                window.location.href = "index.html"
            })
            .catch(err => console.log(err))
    }

}

function checkEmail() {
    let email = document.getElementById("userEmail").value

    fetch(url)
        .then(res => res.json())
        .then(data => {
            flag = false;
            for (let i = 0; i < data.length; i++) {
                let datas = data[i];
                if (datas.userEmail == email) {
                    console.log("Successfully Found!!!");
                    flag = true;
                    tempEmail = email;
                    document.location.href = "http://127.0.0.1:5500/changepassword.html?email=" + tempEmail;
                    break;
                }
            }
            if (flag == false) {
                alert("Email Id does not exist!!");
            }
        })
        .catch(err => console.log(err))
}

function changePassword() {
    let userpassword = document.getElementById("upassword").value
    let usercpassword = document.getElementById("ucpassword").value

    var url = document.location.href,
        param = url.split('?')[1].split('&'),
        data = {}, tmp;

    for (let i = 0, l = param.length; i < l; i++) {
        tmp = param[i].split('=');
        data[tmp[0]] = tmp[1];

    }
    alert(data.email)
    if (userpassword == usercpassword) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                flag = false;
                for (let i = 0; i < data.length; i++) {
                    let datas = data[i];
                    if (datas.userEmail == email) {
                        alert("Successfully Found!!!");
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    alert("Email Id does not exist!!");
                }
            })
            .catch(err => console.log(err))
    }

}