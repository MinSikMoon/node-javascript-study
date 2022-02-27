var a = 10;
var b = 20;
var c = 30;
var d = 40;
//export default a; //a를 기본적으로 내보내겠습니다. 1번만 사용가능 // import하는쪽에서 이름 다른걸로 바꿔도 됨
// 여러개를 export하려면 default가 아니라 중괄호로
export { a, b, c };
export default d; //d는 가져다 쓰는 쪽에서 작명 가능