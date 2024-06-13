// // function logMessage(value: any) {
// //     console.log(value);
// // }
// // logMessage('hello');
// // logMessage(100);

// var lrlr: string | number | boolean;
// function logMessage(value: string | number){
//    if (typeof value === 'number') {
//     value.toLocaleString();
//    }
//    if (typeof value === 'string') {
//     value.toString();
//    }
//    throw new TypeError('value must be string or number');
// }
// logMessage('hello');
// logMessage(100);

// interface Developer {
//     name: string;
//     skill: string;
// }

// interface Person {
//     name: string;
//     age: number;
// }

// // function askSomeone(someone: Developer | Person) {
// //     // someone.name;
// //     // someone.skill;
// //     // someone.age;
// // }

// function askSomeone(someone: Developer & Person) {
//     someone.name;
//     someone.age;
//     someone.skill;
//     }

// askSomeone({ name: '개발자', skill: '웹 개발', age: 100 });
// // askSomeone({ name: '나나', age: 100 });

// // 인터섹션 타입 &
// var lrlr: string | number | boolean;
// var kim: string & number & boolean;