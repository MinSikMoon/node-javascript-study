//1. 강아지 class 만들기
// var 강아지1 = { type : '말티즈', color : 'white' };
// var 강아지2 = { type : '진돗개', color : 'brown' };
class dog {
    //1. constructor, properties
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    get getType() {
        return this.type;
    }
    set setType(type) {
        this.type = type;
    }
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
}

var d1 = new dog('maltis', 'white');
var d2 = new dog('jindo', 'brown');
d2.setType = 'sichu';
console.log(d1.getColor, d2.getType);

//2. extends 응용
//3. dog와 같지만 age 속성이 추가된 cat class를 만들고 싶다. 
// var 고양이1 = { type : '코숏', color : 'white', age : 5 };
// var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 
class cat extends dog {
    //1. constructor and properties
    constructor(type, color, age) {
        super(type, color);
        this.age = age;
    }
    //2. get/set
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
}
var c1 = new cat('shorthair', 'black', 1);
console.log(c1.getAge);

//3. 모든 고양이, 강아지 object들은 한살먹기() 기능을 쓸수 있되, 고양이 class들 외에서 쓰면 에러를 출력
dog.prototype.addAge = function (age = 1) {
    if (this instanceof cat) {
        return this.age + age;
    }
}

console.log(c1.addAge(2), c1 instanceof dog, c1 instanceof cat);
console.log(d1.addAge());

//4. 홀수 짝수 구분하는 class 만들기
class data {
    //constructor, properties
    constructor() {
        this.odd = [];
        this.even = [];
        this.setNum = function (...num) {
            num.forEach(elem => {
                if (Number.parseInt(elem) % 2 === 0) {
                    this.even.push(elem);
                } else {
                    this.odd.push(elem);
                }
            })
        }
    }
}

var dt1 = new data();
dt1.setNum(1, 2, 3, 4, 5); // setter는 단일 값만 지정가능하므로 function으로 만들었음.
console.log(dt1);