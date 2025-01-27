// function demo(){
//     console.log("Hello")
// }
// demo()

// let  p =new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Success")
//     }, 4000);
// })

// async function demo(){
//     console.log("start")
//     console.log("1")
//     let x = await p;
//     console.log(x)
//     console.log("End")
// }
// demo()


async function demo(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    // let data = await response.json()
    // console.log(data);
    console.log(await response.json())
}
demo()