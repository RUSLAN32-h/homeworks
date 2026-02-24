// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
const firstName = "ruslan";
// 2. lastName – фамилия (строка)
const lastName = "zinnatullin";
// 3. isStudent – является ли учеником курса (булево значение)
const isStudent = true;
// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
const age = 19;
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
const currentYear = 2026;
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.
const birthYear = currentYear - age;
// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].
console.log(
  "Меня зовут " +
    firstName +
    " " +
    lastName +
    ", мне " +
    age +
    " лет. Я ученик/ученица курса: " +
    isStudent,
);

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;
// "123456789falsetrue"
