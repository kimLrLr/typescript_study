// // // JS 코드
// // function logText(text) {
// //     console.log(text);
// //     return text;
// // }
// // logText(10);    // 숫자 10
// // logText('하이'); // 문자열 하이
// // logText(true);  // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// // 함수를 호출할때 파라미터의 타입을 지정하며 넘길 수 있다.
// logText<string>('하이');
// logText<number>(100);

// function logText(text: string) {
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);