function stdConstructor(name, age) {
    this.name = name; //this는 새로 생성되는 obj
    this.age = age;
    this.sayHi = function () {
        console.log(`안녕하세요 저는 ${this.name}이구요, ${this.age}살 입니다.`);
    }
}

let obj1 = new stdConstructor('kim', 22);
let obj2 = new stdConstructor('min', 33);

console.log(obj1, obj2);
obj1.sayHi();
obj2.sayHi();

//prototype(유전자, 원형)은 상속을 구현하기 위해서 만들어진 javascript 문법
//1. constructor를 만들면 내부에 prototype(object)이 자동으로 생긴다. 
console.log(stdConstructor.prototype);
//2. prototype은 부모의 유전자이기에, prototype에 유전되어야할 요소를
// 넣어놓으면 자식들은 모두 꺼내서 쓸수 있다. 즉 물려주기 가능
stdConstructor.prototype.gender = '남';
let obj3 = new stdConstructor('moon', 44);
console.log(obj1.gender);
//stdConstructor가 obj들의 부모라고 보면 되고
//stdConstructor에 gender 변수가 없는데 출력되는 원리는
//자바스크립트   엔진이 실제로 obj가 직접 gender 변수를 가진지, 없다면 부모인 prototype에 있는지 검사
//그래서 array에서 sort, toString 이런 함수들을 그냥 쓸수 있는 거지 
console.log(obj3.toString());

var arr1 = [1, 2, 3]; //하면 실제로는 var arr1 = new Array(1,2,3); 이렇게 생성됨 

//1. prototype은 constructor 함수에만 몰래 생성된다. 
let arr4 = [1, 2, 3];
console.log(arr4.prototype);