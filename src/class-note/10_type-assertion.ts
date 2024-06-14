// 타입 선언(type assertion)
var a;
a = 20;
a = 'a';
var b = a as string;

// DOM API 조작
// <div id = "app">hi</div>

let div = document.querySelector('div') as HTMLDivElement;
div.innerText;
// if (div) {
//     div.innerText;
//     }