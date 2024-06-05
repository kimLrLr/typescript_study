// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
// var str: string = "hello";
let str: string = "hello";

//TS 숫자
let num: number = 10;
// es6 이상을 사용하는 때에는 변수 var을 대신해서 let이나 const를 사용

//TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["kimLrLr", "choiLrLr", "BaeLrLr"];
let items: number[] = [1, 2, 3];

// TS 튜플: 배열의 각각 index에 타입이 정의되어 있다.
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'LrLr',
//     age: 17
// };
let person: { name: string; age: number } = {
  name: "LrLr",
  age: 17,
};

// TS 진위값
let show: boolean = true;
