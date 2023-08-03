function inchToFeet(inch){
    var feet = inch*0.0328084;
    return feet;
}

const myheight = 164;
console.log("My height in feet, ",inchToFeet(myheight));