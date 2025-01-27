// let p1 = new Promise((resolve,reject)=>{
//     resolve("reject")
// })
// console.log(p1)

// p1.then((res)=>{
//     console.log(res)
// })

// p1.catch((err)=>{console.log(err)})


// let p2 = new Promise((resolve, reject)=>{
//     resolve("Success")
// })

// p2.then(res => console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>console.log("final"))

// console.log(p2)

function fetchmethod(){
    let x = fetch ("https://jsonplaceholder.typicode.com/users")
    // console.log(x)
    // .then(res => console.log(res))
    .then(res => {
        return res.json().then(data=>console.log(data))
    })
    .catch(err=>console.log(err))
}
fetchmethod()