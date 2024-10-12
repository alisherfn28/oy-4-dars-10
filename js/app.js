////////////////////////////Length////////////////////////////

//1-misol;

// let massiv = [1, 2, 3, 4, 5];

// console.log(massiv.length);

//2-misol;

// let matn = "Hello World";
// let belgi = matn.length;
// console.log(belgi);

//3-misol;

// let massiv = [1, 2, 3, 4, 5];
// let element = massiv[massiv.length - 1];
// console.log(element);

////////////////////////Concat//////////////////////////////

//1-misol;

// let massiv1 = [1, 2, 3, 4, 5];
// let massiv2 = [6, 7, 8, 9, 10];

// let massiv = massiv1.concat(massiv2);
// console.log(massiv);

//2-misol;

// let massiv1 = [1, 2, 3, 4, 5];
// let massiv2 = [6, 7, 8, 9, 10];
// let massiv3 = [11, 12, 13, 14, 15];

// let massiv = massiv1.concat(massiv2, massiv3);
// console.log(massiv);

//3-misol;

// let massiv1 = [1, 2, 3, 4, 5];
// let massiv2 = [6, 7, 8, 9, 10];

// let massiv = massiv1.concat(massiv2);

// massiv.push(11, 12, 13, 14, 15);
// console.log(massiv);

//////////////////////////////////////Includes//////////////////////////////////////

//1-misol;

// let massiv = [1, 2, 3, 4, 5];

// console.log(massiv.includes(3));

//2-misol;

// let massiv = ["salom", "Alisher", "ustoz", "najot", "olim"];

// console.log(massiv.includes("Alisher"));

//3-misol;

// let massiv = [1, 2, 3, 4, 5];

// for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] > 10) {
//         console.log("Mavjud");
//     } else {
//         console.log("Mavjud emas");
//     }
// }

////////////////////IndexOf, LastIndexOf////////////////////

//1-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10];

// console.log(massiv.indexOf(5));

//2-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10];

// console.log(massiv.lastIndexOf(5));

//3-misol;

// let xarf = ["a", "b", "c", "a", "d", "e", "f", "g"];

// console.log(xarf.indexOf("a"));
// console.log(xarf.lastIndexOf("a"));

/////////////////////////Sort////////////////////////////

//1-misol;

// let numbers = [10, 5, 8, 3, 7, 9, 6, 4, 2, 1];

// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

//2-misol;

// let massiv = ["salom", "Alisher", "ustoz", "najot", "olim"];

// massiv.sort();

// console.log(massiv);

//3-misol;

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.sort(function(a, b) {
//     return b - a;
// });
// console.log(numbers);

/////////////////////////Reverse////////////////////////////

//1-misol;

// let massiv = ["salom", "Alisher", "ustoz", 1, 2, 3, 4, 5];

// let tsk = massiv.reverse();

// console.log(tsk);

//3-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let tsk = massiv.reverse();

// console.log(tsk);

/////////////////////////ToString////////////////////////////

//1-misol;

// let massiv = ["salom", "Alisher", "ustoz", 1, 2, 3, 4, 5];

// let str = massiv.toString();

// console.log(str);

//2-misol;

// let massiv = ["salom", "Alisher", "ustoz", "najot", "olim"];

// let str = massiv.toString();

// console.log(str);

//3-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let str = massiv.toString();

// console.log(str);

/////////////////////////Join////////////////////////////

//1-misol;

// let massiv = ["salom", "Alisher", "ustoz", 1, 2, 3, 4, 5];

// let str = massiv.join("_");

// console.log(str);

//2-misol;

// let massiv = ["salom", "Alisher", "ustoz", "najot", "olim"];

// let str = massiv.join(" ");

// console.log(str);

//3-misol;

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let str = massiv.join("|");

// console.log(str);

/////////////////////////Push, Shift////////////////////////////

//1-misol;

// let massiv = [1, 2, 3, 4, 5];

// massiv.push("salom");

// console.log(massiv);

//2-misol;

// let massiv = [1, 2, 3, 4, 5];

// massiv.shift();

// console.log(massiv);

//3-misol;

// let massiv = [1, 2, 3, 4, 5];

// massiv.push("salom", "Alisher");
// massiv.shift();

// console.log(massiv);

/////////////////////////Pop, Unshift////////////////////////////

//1-misol;

// let massiv = [1, 2, 3, 4, 5];

// massiv.unshift("salom");

// console.log(massiv);

//2-misol;

// let massiv = [1, 2, 3, 4, 5];

// massiv.pop();

// console.log(massiv);

//3-misol;

// let massiv = [1, 2, 3, 4, 5];

// massiv.unshift("salom", "Alisher");
// massiv.pop();
// massiv.push("olim");
// massiv.shift();

// console.log(massiv);

/////////////////////////Qiyinroq masalalar////////////////////////////

//2-misol;

// let massiv1 = [1, "salom", 3, "olim", 5];
// let massiv2 = ["Alisher", 7, "ustoz", "najot", 10];

// let massiv = massiv1.concat(massiv2);

// let son = massiv.filter((element) => typeof element === "number");

// console.log(son);

//3-misol;

// let massiv = ["salom", "Alisher", "ustoz"];
// let qidirilayotganElement = "Alisher";
// let yangiElement = "najot";

// let index = massiv.indexOf(qidirilayotganElement);

// if (index !== -1) {
//   massiv.splice(index, 1);
//   console.log(`${qidirilayotganElement} elementi massivdan olib tashlandi`);
// } else {
//   massiv.push(yangiElement);
//   console.log(
//     `${qidirilayotganElement} elementi topilmadi ${yangiElement} massivga qo'shildi`
//   );
// }

// console.log(massiv);

//4-misol;

// let massiv = [1, 2, 3, 1, 4, 5];
// let qidirilayotganElement = 1;

// let index1 = massiv.indexOf(qidirilayotganElement);
// let index2 = massiv.lastIndexOf(qidirilayotganElement);

// let yangiMassiv = massiv.slice(index1, index2 + 1);

// console.log(yangiMassiv);

//5-misol;

// let massiv = [3, "salom", 1, "olam", 2, "ustoz"];

// let sonlar = [];
// let sozlar = [];

// for (let i = 0; i < massiv.length; i++) {
//   if (typeof massiv[i] === "number") {
//     sonlar.push(massiv[i]);
//   } else {
//     sozlar.push(massiv[i]);
//   }
// }

// sonlar.sort(function (a, b) {
//   return a - b;
// });

// sozlar.reverse();

// let natija = sonlar.concat(sozlar);

// console.log(natija);
