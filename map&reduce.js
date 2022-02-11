//map은 데이터를 분리해서 새로운 데이터set를 만들며
//reduce는 새로운 데이터set을 함수를 이용해 계산한다. 

const students = [
    { name: 'tester1', age: 31, score: 85 },
    { name: 'tester2', age: 21, score: 95 },
    { name: 'tester3', age: 36, score: 77 },
];

const scoreSet = students.map(student => student.score);

const sum = scoreSet.reduce((a, b) => a + b, 0);

console.log(sum);