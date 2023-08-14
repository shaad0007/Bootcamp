// document.write("Hello world" + "<br>");
// document.write("<b><i>Hello world</b></i>");

// document.write("<b><i>Hello world</b></i>");
/*document.write("<b><i>Hello world</b></i>");
document.write("<b><i>Hello world</b></i>");*/

// var jj, ans;

// jj = 100;
// ans = 500;

// console.log(ans);
// console.log(jj);

// var a = 10;
// document.write(a);

// let a = "73";
// let b = "hello";
// let c = 58;
// let d = true;
// let e;
// let f = ["hello", 46];
// let g = { name: "shaad", age: 36 };
// let h = null;
// document.write(typeof a + "<br>");

// document.write(typeof b + "<br>");
// document.write(typeof c + "<br>");
// document.write(typeof d + "<br>");
// document.write(typeof e + "<br>");
// document.write(typeof f + "<br>");
// document.write(typeof g + "<br>");
// document.write(typeof h + "<br>");

// console.time();

// console.log("shaad");
// console.error("i am danger");
// console.warn("terminator");
// console.table([1, 2, 3, 4, 5]);
// console.timeEnd();
// console.clear();

// let a = 0;
// let b = 10;
// if (a > b) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// let name = "Shaad";
// let gender = "male";

// if (gender === "male") {
//   document.write("Hello Mr." + name);
// } else {
//   document.write("Hello Mrs." + name);
// }

// let per = prompt("Enter your percentage");

// if (per <= 100 && per >= 80) {
//   console.log("Merit");
// } else if (per < 80 && per >= 60) {
//   console.log("First Division");
// } else if (per < 60 && per >= 45) {
//   console.log("Second Division");
// } else if (per < 45 && per >= 33) {
//   console.log("Third Division");
// } else if (per < 33) {
//   console.log("Fail");
// } else {
//   console.log("error");
// }

// let a = 10;
// let b = 20;
// let z;
// z = "value is " + (a < b ? "true" : "false");
// console.log(z);

// let day = +prompt("give me a number according to week");
// switch (day) {
//   case 3:
//   case 1:
//   case 2:
//     console.log("Monday");
//     break;

//   case 4:
//     console.log("Thusday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("error");
//     break;
// }

// let a = confirm("do you like our website??");
// if (a) {
//   alert("Thanks");
// } else {
//   alert("Sorry");
// }

// let ans = prompt("What is your name ??");
// alert(ans);

// function print() {
//   console.log("Hello Worldsss");
// }
// print();
// print();
// print();
// print();
// print();

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(10, 100);
// sum(500, 100);
// sum(0, 85);

// function print(fName = "Ram", sName = "Singh") {
//   console.log("Hello " + fName + " " + sName);
// }

// print("shaad", "Ali");
// print("cute", "zone");

// function sub(math, sci, eng, hin) {
//   let a = math + sci + eng + hin;
//   return a;
// }

// function calculate(tt) {
//   let per = (tt / 300) * 100;
//   document.write(per);
// }

// let total = sub(100, 80, 50, 10);
// calculate(total);

// function sub(eng, sci, hin, math) {
//   let a = eng + sci + hin + math;
//   return a;
// }

// function cal(total) {
//   let per = (total / 400) * 100;
//   document.write(per);
// }

// let total = sub(80, 80, 80, 80);
// cal(total);

// let a = 10;
// function test() {
//   console.log(a);
// }
// test();

// console.log(a);

// function test() {
//   let a = 20;
//   console.log(a);
// }
// test();

// console.log(a);

// function hello() {
//   alert("hello everyone");
// }
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// for (let i = 1; i <= 10; i++) {
//   if (i === 3) {
//     console.log("suuuiiiiiii");
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// for (let i = 1; i <= 100; i = i + 10) {
//   for (let j = i; j <= i + 9; j++) {
//     document.write(j + " ");
//   }
//   document.write("<br>");
// }

// for (let i = 5; i >= 1; i--) {
//   for (let j = i; j >= 1; j--) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[4], arr[3]);
// for (let value of arr) {
//   console.log(value);
// }
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   sum = sum + arr[i];
//   console.log(arr[i]);
// }
// console.log("Total " + sum);

// let arr = new Array();
// arr[0] = 10;
// arr[1] = "shaad";
// arr[2] = "yes";
// arr[3] = true;
// arr[4] = false;
// console.log(arr);

// let arr = new Array();
// for (let g = 0; g < 3; g++) {
//   arr[g] = prompt("write something");
// }

// for (let i = 0; i < 3; i++) {
//   console.log(arr[i]);
// }

// let arr = [
//   ["shaad", 30, "male", "B.COM"],
//   [("rishi", 20, "male", "M.COM")],
//   [("kashvi", 40, "fale", "BBA")],
//   [("mavi", 50, "male", "CA")],
// ];

// console.log(arr[1].flat());

// let arr = ["shaad", 20, false];
// console.log(arr);
// arr[0] = "rocky";
// console.log(arr);
// arr[1] = 70;
// console.log(arr);

let arr = [10, 2, 3, 1000, 4, 5];
// let ans = arr.sort((a, b) => {
//   return 0;
// });
// console.log(ans);

arr.reverse();
console.log(arr);
