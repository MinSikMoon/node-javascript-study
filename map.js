//define
const list = [1, 2, 3];

//process
const multipleList = list.map(item => item * 10);
multipleList.forEach(item => console.log(item));


//define2
const listEmployee = [
    { name: 'tester1', age: 31, salary: 4500 },
    { name: 'tester2', age: 22, salary: 3300 },
    { name: 'tester3', age: 44, salary: 6500 },
];

//process
const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
//console out
raisedSalaryList.forEach(salary => console.log('salary: ',salary));