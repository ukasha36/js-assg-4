// Q-1
// const Numbers = [
//     [2, 3, 4],
//     [5, 6, 7]
//   ];

// Q-2

// const Numbers = [ [0, 1, 2, 3], [1, 0, 1, 2] , [2, 0, 1, 1]];

// Numbers.forEach(row => {
//     document.write("<br>")
//     debugger;
//     row.forEach(element => {
//       document.write(element);
//     });
//   });

// Q-3
// for (let index = 1; index < 11; index++) {
//     document.write("<br>")
//     document.write( index);
//  }

// Q-4
// let table = prompt("Enter a number to show its table");
// let table2 = +table ;
// let length = prompt("Enter a lenth of table");
// let length2 = +length ;

//   document.write("Table Of : " + table2)
//   document.write("<br>")
// for (let i = 1; i <= length2 ; i++) {
//     document.write("<br>")
//    document.write(table2 + " * " + i + " = " +  table2 * i)
// }

// // Q-5 
// let fruits = ["Apple" , "Banana" , "Mango" , "Orange",  "Strawberry"]

// fruits.forEach((Element , index)=>{
//     document.write("<br>")
//     document.write(Element)
//     document.write("<br>")
//     document.write( " Element at index "+ index + " is " + Element)
// }

// )

// Q-6 (a)
// let Counting = "Counting"
// document.write(Counting)

// for (let index = 1; index < 15; index++) {
//     document.write( ", " + index );
//  }
//      document.write("<br>")
     
// Q-6 (b)
// let Counting2 = "Reverse Counting"
// document.write(Counting2)

// for (let i = 15; i >  0; i--) {
//     document.write( ", " + i);
//  }

// Q-6 (c)
// document.write("<br>")
// let Even = "Even : "
// document.write(Even)

// for (let i = 0; i < 11; i++) {
 
//     document.write(  ", " + i*2);
//  }

// Q-6 (d)
// document.write("<br>")
// let odd = "Odd : "
// document.write(odd)
// let Numbers = [1,3,5,7,9,11,13,15,17,19]

// Numbers.forEach(element => {
//     document.write(", " + element)
//  });

 // Q-6 (e)
// document.write("<br>")
// let series = "Series : "
// document.write(series)

// for (let i = 1; i < 11; i++) {
 
//     document.write(  ", " + i*2 + "K");
//  }

//  Q-7 
const Arr = ["cake", "apple pie", "cookie", "chips", "patties"];
const input = prompt("What do you want to order : ")
 
Arr.forEach((element , index )=>{
    if( input == element){
  document.write(input +  " is available at index " + index + " in our bakery ")
  shouldExit = false;
    }
    else {
        document.write (input +  " is not  available  in our bakery");
 
    }
     
})
