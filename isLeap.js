function isLeap(year){
    let res = year%4;
    if(res == 0){
        return true;
    }
    else return false;
}
let yr =2020;
console.log(isLeap(yr));

function isLeap(year){
    let res = year%4;
    if(res === 0){
        console.log("the year "+ year + " is leapyear! YAYY ");
    }
    else console.log("the year "+ year + " is no leapyear! OWWN");
}

console.log(isLeap(2020));