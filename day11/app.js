// let a = document.querySelectorAll(".demo");
// [...a].map(element=>{
//     element.addEventListener("mouseover",()=>{
//         element.style.backgroundColor = element.innerText;
//     });
//     element.addEventListener("mouseleave",()=>{
//         element.style.backgroundColor = "transparent";
//     })
// }); 


let demo = document.createElement("h1");
demo.innerText = ("Hi I'am Akshay")
// console.log(demo)
demo.setAttribute("id","ele")
console.log(demo)
document.body.appendChild(demo)


let image = document.createElement("img")
image.setAttribute("img", "im")
console.log(image)
image.src = "./jj.jpg"
document.body.appendChild(image)