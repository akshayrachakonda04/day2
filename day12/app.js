// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "topBlock");
// mainEle.innerText = "Hi"


// let secondEle = document.createElement('div');
// secondEle.setAttribute("class", "mainBlock");
// secondEle.innerText = "Hii"


// let thirdEle = document.createElement("div");
// thirdEle.setAttribute("class", "bottomBlock");
// thirdEle.innerText = "Hiii"


// let image = document.createElement("img")
// image.src="https://cdn.pixabay.com/photo/2024/12/31/06/47/ambulance-9301630_960_720.jpg"
// image.height = "500";
// image.width = "500";
// image.style.objectFit = "cover";

// secondEle.appendChild(image);
// mainEle.appendChild(secondEle)
// mainEle.appendChild(thirdEle)

// document.body.appendChild(mainEle);
// // document.body.appendChild(secondEle);


let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
// console.log(gender);

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i = 0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen += gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        gender:gen

    };
    console.log(userDetails);
    sessionStorage.setItem("userData" ,JSON.stringify(userDetails) )
})