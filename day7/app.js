// function a(){
//     let a = 10;
//     var b = 30
//     console.log(a, b)
//     function c(){
//         console.log("HI")
//     }
//     c()
//     function d(){
//        console.log("Welcome") 
//     }
//     d()
// }
// a()



function x() {
    let a = 10;
    const b = 20;
    console.log(a ,b);
    function y(){
        let p="Js";
        var q = "ReactJs";
        console.log(p , q);
        function z(){
            const username = "Harish";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z()
    }
    y();
} 
x();