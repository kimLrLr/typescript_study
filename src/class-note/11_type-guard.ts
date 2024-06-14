interface Developer {
    name: string;
    skill: string;
}
    
interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'LrLr', age: 100, skill: 'programing'}
}
var kim = introduce();
// console.log(kim.skill);

if ((kim as Developer).skill) {
    var skill = (kim as Developer).skill;
    console.log(skill);
} else if ((kim as Person).age) {
    var age = (kim as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined
}

if (isDeveloper(kim)) {
    console.log(kim.skill);
} else{
    console.log(kim.age);
}