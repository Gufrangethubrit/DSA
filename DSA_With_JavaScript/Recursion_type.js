// let money = 100;
// let totalApple = 0;

// function buyApple(x){
//     if(x>0){
//         console.log(`I have ${x} RS ${totalApple}`)
//         buyMore(x-10);
//     }else{
//         console.log(`I don't have more money ${totalApple}`)
//     }
// }

// function buyMore(x){
//     totalApple++;
//     buyApple(x-5)
// }
// buyApple(money)

function test(n){
    console.log(n)
    if(n>0){
        test(n-1) // use n-- or --n
    }
    console.log(n)
}
let data = 4;

test(data)