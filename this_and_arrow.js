//문제1
var 사람 = {
    name: '손흥민',
    sayHi: function () { console.log(this.name) }
    //sayHi : () => console.log(this.사람.name) //arrow function에서는 this가 sayHi함수를 가진 오브젝트를 뜻하지 않음. 따라서 구 문법 스타일로 작성
}

사람.sayHi();

//문제2
var 자료 = {
    data: [1, 2, 3, 4, 5],
    전부더하기: function () {
        var temp = 0;
        this.data.forEach((item) => (temp += item));
        console.log(temp);
    },
    전부더하기_reduce_version: function () {
        console.log(this.data.reduce((a, b) => a + b, 0));
    }
};

자료.전부더하기();
자료.전부더하기_reduce_version();
