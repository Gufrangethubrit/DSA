// function Mango(){
//     console.log(" hi i am mango")
//     if(false){
//         console.log("true function")
//     }else{
//         console.log("false function")
//     }
// }
// function Apple(){
//     Mango()
// }
// function Orange(){
//     Apple()
// }
// function Bannana(){
//     Orange()
// }
// function Graps(){
//     Bannana()
// }
// function fruit(){
//     Graps()
// }

// fruit();

function test(n){
    if(n>0){
        test(n-1)   // stack = 6,5,4,3,2,1,0 (  FIFO )
    }
    console.log(n)
}
test(6)

