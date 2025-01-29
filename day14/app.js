let arr =[
    {
    empId:"1",
    empName:"Akshay",
    empCompany:"Google",
    empSalary:50000,
    empAddress:{
        empCity:"Siddipet",
        empArea:"Khamman"
    }
    },
    {
    empId:"2",
    empName:"Ram",
    empCompany:"Microsoft",
    empSalary:80000,
    empAddress:{
        empCity:"Ayodhya",
        empArea:"Ram Mandir"
    }
    },
    {
    empId:"3",
    empName:"Krishna",
    empCompany:"Meta",
    empSalary:90000,
    empAddress:{
        empCity:"Hyderabad",
        empArea:"Jubliee hills"
    },
    }
];


// let table = document.createElement("table")
// let trow = document.createElement("tr")
// let thead1 = document.createElement("th")
// let thead2 = document.createElement("th")
// let trow2 = document.createElement("tr")
// let thead21 = document.createElement("th")
// let thead22 = document.createElement("th")
// let tbody = document.createElement("td")

// table.appendChild(trow)
// trow.appendChild(thead1)
// trow.appendChild(thead2)
// table.appendChild(trow2)
// trow2.appendChild(thead21)
// trow2.appendChild(thead22);




[...arr].map((users)=>{
    let store  = document.getElementById("store");
    store.innerHTML += `
    <tr>
        <td>${users.empId}</td>
        <td>${users.empName}</td>
        <td>${users.empSalary}</td>
        <td>${users.empCompany}</td>
        <td>${users.empAddress.empCity}</td>
        <td>${users.empAddress.empArea}</td>
    </tr>
    `
})