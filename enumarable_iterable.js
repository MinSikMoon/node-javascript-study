// 반복문도 종류가 많다. 

var obj = { name: 'kim', age: 30 };


// 1. obj의 key를 알아내고 싶을때 
for (var key in obj) {
    console.log(key, obj[key]); // name, age라고 key가 나옴
}

//for in 특징 : 1. enumarable 한것만 반복
// obj는 실제로 더 많은 property를 보유
let info = Object.getOwnPropertyDescriptor(obj, 'name'); // obj의 name key 정보를 알고 싶다. 
console.log(info); // { value: 'kim', writable: true, enumerable: true, configurable: true }

//for in 특징 : 2. 부모의 prototype도 반복해준다. 
class parent {
    constructor() {
        this.job = 'teacher';
    }
}

parent.prototype.name = "parent's name";

obj = new parent();

for (var key in obj) {
    //console.log(key, obj[key]); // name parent's name : 실제 class에 name을 넣은적이 없지만 부모 유전자에 넣었기 때문
    //따라서 자식 property만 나오게 하고 싶다면 조건문을 달아야함
    if (obj.hasOwnProperty(key)) console.log(key, obj[key]); // 이제 부모 property가 나오지 않음
}


//for of : array, string, arguments, nodelist, map, set
//iterable : true형에만 사용가능
var arr = [1, 2, 3, 4, 5];
for (var elem in arr) {
    console.log(elem);
}

console.log(arr[Symbol.iterator]()); //Array Iterator 이런게 있으면 iterable한 자료형임 

//1. 구구단 출력해보기 

let dt = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var elem1 of dt) {
    for (var elem2 of dt) {
        console.log(`${elem1} x ${elem2} = ${elem1 * elem2}`);
    }
}

// 문제 2 : 어떤 놈이 key값 마지막 부분에 오타를 섞어놨습니다.

// key값 마지막에 한자릿수 숫자가 섞여있으면 그걸 다 제거하고 싶습니다. 

// 어떻게 코드를 짜면 될까요? 

var products = [
    {
        name1: 'chair',
        price1: 7000,
    },
    {
        name2: 'sofa',
        price: 5000,
    },
    {
        name1: 'desk',
        price3: 9000,
    },
];

//1. key를 검색해야함
for (var elem of products) { //products array에서 item1개 꺼내고
    for (var key in elem) { //key를 체크해서 숫자가 있는지 파악
        let lastKeyIndex = key.length - 1;
        if (!isNaN(key.charAt(lastKeyIndex))) { //key 끝이 숫자라면 
            let newKey = key.substring(0, lastKeyIndex);
            elem[newKey] = elem[key];
            delete elem[key];
        }
    }
};

console.log(products);