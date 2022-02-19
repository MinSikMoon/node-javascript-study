//let 과 var const 차이
//var : 재선언 o / 재할당 o / 스코프 : 함수 (함수내에서만 존재)
//let : 재선언 x / 재할당 o / 스코프 : 중괄호{}
//const : 재선언 x / 재할당 x / 스코프 : 중괄호{}
'use strict'; //이걸 키면 에러다 잡아냄
var 이름 = 'kim';
var 이름 = 'minsik';
let 이름2 = 'minsik';
//let 이름2 = 'minsik';

//const로 object를 만들고 안에 오브젝트 내부값 변경은 가능
const obj = { id: 'minsik' };
//obj = { id2 : 22}; //error
obj.job = 'programmer';
// 오브젝트 내 변수까지 재할당하고 싶다면 freeze
Object.freeze(obj);
obj.job = 'programmer2';
console.log(obj.job); //programmer2로 변하지 않음