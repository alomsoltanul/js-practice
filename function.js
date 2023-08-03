
// Basic fucntion declaration

function neew(){
    console.log("This is my first time using function in JS");
}

neew();

// function declaration with parameters 
function sum(sum1, sum2){
    var total = sum1 + sum2;
    var avgTotal = total / 2;
    console.log(avgTotal);
}
sum(15,25);

//  function declaration with parameters Function using return system

function newReturn(sum3, sum4){
    var ttotal = sum3 + sum4;
    var aavgTotal = ttotal / 2;
    return aavgTotal;

}

var x = 65,y=56;
console.log("avg is : ",newReturn(x,y) );