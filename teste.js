let num = [1,2,3,4,5,6,7,8,9,10];
let v1 = 1;
let v2 = 1;

for(let i=2; i<=num.length; i++) {
    if (num[i]< v1) {
        v1 = num[i];
    } else if (num[i] > v2) {
        v2 = num[i];
    }
}

console.log(v1, v2);
