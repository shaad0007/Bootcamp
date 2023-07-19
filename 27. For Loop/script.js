// for(let a = 10; a<= 100; a=a+9){
//     console.log("Hey " + a)
// }



// for(let a = 20; a<=100; a+=10){
//     console.log("Hey "+ a)
// }

// for(let i = 2; i<=10; i+=2){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// for(let i=10; i>= 1; i-=1){
//     console.log(i);
// }


// for(let i=1; i<=10; i+=1){
    
//         console.log(i*3)

// }

// let i= 3;
// while (i<=30) {
//     if(i%3===0){
//         console.log(i);
        
//     }  i+=1;
// }


// let i= 10;
// while (i>=1) {
//     console.log(i);
//     i-=1;
// }



// for(let i =1; i<=4; i+=1){
// for(let j =1; j<=2; j+=1){
//     for(let n =1; n<=2; n+=1){
//         console.log("*")
//     }
   
// }
// }





// for(let i = 1; i<= 10; i++){
//     console.log(i)
// }



// for(let i = 1; i<=20; i++){
//     if(i%2===0)
//     console.log(i)
// }


// for(let i = 10; i>=1; i--){
//     console.log(i)
// }


// let i = 1;
// while (i<=10) {
//     if(i%2===0){
//          console.log(i)
//     }
//     i++;
    
//     }


//     for(let i=50; i>=30; i--){
//      if(i%2===0){
//           console.log(i)
//      }

//      }


// 1 2 4 8 16 32 64 128 256 512 1024 2048

// for(let i = 2048; i>= 1; ){
//      i/=2
//     console.log(i)  
//     // i/=2
// }

//2048 1024 512 256 

/*
1
11
111
1111
11111
*/







// for(let i=1;i<=5;i++){
//     let str = "";
//     for(j=5;j>=i;j--){
//         str = str+ "*";
//         // console.log(j)
//         // str =str +"1";
//     }
//     console.log(str)   
// }



/*

*
**     //here i is represent to row
***     //here j is represent to colum
****
*****

*****
****
***
**
*

    *
   **
  ***
 ****
*****
*/





// for(let i = 1; i <= 50; i++ ){
//     if(i % 7 !== 0)
//     console.log(i)
// }



// Print the square of numbers from 1 to 5:

// ANS 
// for(let i = 1; i<= 5; i++){
//     console.log(i * i)
// }


// Print the sum of numbers from 1 to 10:

// ANS
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//      sum = sum + i
// }
// console.log(sum)



// let number = Number(prompt("give me a number"))
// for(let i = 1; i<= number; i++)
// console.log()


// for(let i = 1; i<=10;i--){
//     console.log(i)
    
// }



// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 2; j++) {
//     console.log(i + '-' + j);
//   }
// }



var i;
for (i = 0; i < 10; i++) {
  if (i === 5) {
    i = 8;
  }
}



let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log(i);
console.log(sum);
