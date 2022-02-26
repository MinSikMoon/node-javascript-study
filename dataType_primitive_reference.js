var 변수 = 1234;
var array = [1,2,3];

//1. reference type은 2개 : array랑 object
let prm1 = 1;
let prm2 = prm1;
prm1 = 2;

console.log(prm1, prm2);

let obj1 = {name: 'kim'};
let obj2 = obj1;
obj1.name = 'lee';
console.log(obj1, obj2);

