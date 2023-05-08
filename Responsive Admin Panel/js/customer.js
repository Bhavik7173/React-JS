curl = "http://localhost:3000/users";
let customerData = [];

let uId = sessionStorage.getItem('uid');
fetch(curl)
.then(res=>res.json())
.then(data=>{display(data);customerData=data})
.catch(err=>console.log(err))

function display(data)
{
    
    console.log(data);
    msg = "";

    for(let i=0;i<data.length;i++)
    {
        
        let row = data[i];
        msg += "<tr>";

        msg += "<td>"+ row.id +"</td>";
        msg += "<td>"+ row.userName +"</td>";
        msg += "<td>"+ row.userEmail +"</td>";
        msg += "<td>"+ row.mobile +"</td>";
        msg += "<td>"+ row.city +"</td>";
        msg += "<td>"+ row.userPass +"</td>";        
        msg += "</tr>";
    }


    document.getElementById("customer_table").innerHTML=msg;
}
