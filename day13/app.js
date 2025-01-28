let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let gender = document.getElementsByName("gender");
let check = document.getElementById("check");
let show = document.getElementById("show");
// console.log(gender);

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i = 0;i<=gender.length-1;i++){
        if(gender[i].checked == true){
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

check.addEventListener("click",(event)=>{
    if (event.target.checked == true){
        password.setAttribute("type","text");
        show.innerText = "Hide Password";
    }else{
        password.setAttribute("type","password");
        show.innerText = "Show Password";
    }
})