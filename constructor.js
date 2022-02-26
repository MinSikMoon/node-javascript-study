// constructor 만드는 이유 : 독립된 object 대량반복 생산

var std1 = { name: 'kim', age: 21 };

function stdConstructor() { 
    this.name = 'Kim'; //this는 새로 생성되는 obj
    this.age = 15;
    this.sayHi = function(){
        console.log(`안녕하세요 저는 ${this.name}이구요, ${this.age}살 입니다.`);
    }
}

//new stdConstructor(); //이러면 obj가 나옴

var obj1 = new stdConstructor();
var obj2 = new stdConstructor();

obj1.sayHi();

console.log(obj1, obj2);
console.log(obj1 == obj2, obj1 === obj2, Object.is(obj1, obj2), Object.is(obj1.name, obj2.name));
