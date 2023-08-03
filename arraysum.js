// ODD sum
let n=9,sum=0;
let arr = [5,2,6,8,3,9,13,15,16];

for(let i = 0;i<n;i++){
    if(arr[i]%2 !=0){
        sum +=arr[i];
    }
}
console.log(sum);