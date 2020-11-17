// Array

// let nilai = [90, 80 ,75 ,100, 85];

// for(let i = 0; i < nilai.length; i++){
//     console.log("Nilai =",nilai[i] + 5);
// }

// console.log(nilai);

// // nilai[2] = 90;
// // console.log(nilai[nilai.length - 1]);

// let john = ["John", "Doe", 33, true];
// console.log(john[john.length - 1]);
// console.log(john);

// // to string()
// console.log(john.toString());
// // join()
// console.log(john.join(" - "));

// // pop()
// john.pop();
// console.log(john.join(" - "));

// // push()
// john.push(true);
// john.push("Hello");
// console.log(john.join(" - "));

// // shift()
// john.shift();
// console.log(john.join(" - "));

// // unshift()
// john.unshift("John");
// john.unshift("Prof");
// console.log(john.join(" - "));

// Exercise 

// splice()

// let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

// buah.splice(2, 0, "Lemon", "Kiwi");

// console.log(buah); 
// Output: ["Pisang", "Jeruk", "Lemon", "Kiwi", "Apel", "Mangga"]

// concat()

// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);

// console.log(makanan); 
// Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]

// slice()

// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih); 
// Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); 
// Output: ["permen", "coklat", "kue"]

// sort()

// Contoh array dengan tipe data string
// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

// buah.sort();

// console.log(buah); 
// Output: ["Apel", "Jambu", "Jeruk", "Mangga"]

// Contoh array dengan tipe data number
// let bilangan = [30, 1, 2, 3.5, 10, 100];

// bilangan.sort();

// console.log(bilangan); 
// Output: [1, 10, 100, 2, 3.5, 30]


// reverse()

// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

// buah.reverse();

// console.log(buah); 
// Output: ["Jambu", "Mangga", "Apel", "Jeruk"]

//combination method sort() dan reverse().

let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];

buah.sort().reverse();

console.log(buah); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]



