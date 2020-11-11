console.log("Basic JavaScript");

// conditional JavaScript

// let firstname = "john";
// let isMarried = true;

// if (isMarried == true){
//     console.log(firstname = " is married");
// }
// else{
//     console.log(firstname = " is not married");
// }

// /*
//    jika umur < 13 tahun maka tampilkan kategori anak-anak
//    jika umur 13 sampai 16 tahun tampilkan kategory remaja
//    jika umur 17 sampai 25 tampilkan kategory anak muda
//    jika umur 25 sampai 50 tampilkan kategory orang dewasa
// */

//  let umur = 25;

//  if (umur < 13){
//     console.log("Kategori anak-anak");
//  }
//  else if (umur >= 13 && umur < 17) {
//     console.log ("Kategori remaja");
//  }
//  else if (umur >= 17 && umur < 26) {
//     console.log ("Kategori anak muda");
//  }
//  else if (umur >= 126 && umur < 50) {
//     console.log ("Kategori orang dewasa");
//  }

// let firstname = "john";
// let job = "teacher";

// switch (job){
//     case "teacher":
//     console.log(firstname + " is a teacher");
//     break;
    
//     case "driver":
//     console.log(firstname + " is a driver");
//     break;

//     case "instructor":
//     console.log(firstname + " is a instructor");
//     break;

//     default:
//     console.log(firstname + " does something else");
//     break;
// }

//  let umur = 25;

//  if (umur < 13){
//     console.log("Kategori anak-anak");
//  }
//  else if (umur >= 13 && umur < 17) {
//     console.log ("Kategori remaja");
//  }
//  else if (umur >= 17 && umur < 26) {
//     console.log ("Kategori anak muda");
//  }
//  else if (umur >= 126 && umur < 50) {
//     console.log ("Kategori orang dewasa");
//  }

// switch (true)
// {
//     case umur < 13:
//       console.log ("Kategori anak-anak");
//       break;
//     case umur >= 13 && umur < 17:
//       console.log ("Kategori remaja");
//       break;
//     case umur >= 17 && umur < 26:
//       console.log ("Kategori anak muda");
//       break;
//     case umur >= 26 && umur < 50:
//       console.log ("Kategori dewasa");
//       break;
//     default:
//       console.log ("Tidak ada dalam range");
//       break;
// }

// Javascript Function

//   function helloword(){
//       console.log("hello world function declaration");
//   }

// let helloWorld = function (nama){
//     console.log ("hello " + nama);
// }

// helloWorld("Favian Mulumbot");

function bmiCalculator () {
  let berat = prompt("Masukkan Berat Badan (kg) : ");
  console.log("Berat badan yang dimasukkan adalah " + berat);
  let tinggi = prompt("Masukkan Tinggi Badan (m) : ");
  console.log("Tinggi badan yang anda masukkan adalah " + tinggi);
  let hasil = berat / (tinggi * tinggi);
  console.log("BMI = " + hasil);

  if (hasil < 18.5) {
      console.log ("Underweight");
  } else if (hasil >= 18.5 && hasil < 24.9) {
      console.log("Normal Range");
  } else if (hasil >= 25.0 && hasil < 29.9) {
      console.log("Overweight (preobese)");
  } else if (hasil >= 30.0) {
      console.log ("Obese");
  } else if (hasil > 30.0 && hasil < 34.9) {
      console.log ("Class I");
  } else if (hasil > 35.0 && hasil < 39.9) {
      console.log ("Class II");
  } else if (hasil >= 40.00) {
      console.log ("Class III");
  }
}
bmiCalculator();

