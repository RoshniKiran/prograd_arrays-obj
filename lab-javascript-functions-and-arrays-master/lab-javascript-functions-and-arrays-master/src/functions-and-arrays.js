// Progression #1: Greatest of the two numbers

// function greatestOfTwoNumbers(x,y){
//   if (x>y){
//     return x
//   }
//   else{
//     return y
//   }
// }

// Progression #2: The lengthy word
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// function findScaryWord(words){
//   let word=[]
//   let cnt=0
//   if (words==0){
//     return null
//   }
//   else{
//     for (let i=0; i<words.length; i++){
//         if (cnt<words[i].length){
//           cnt=words[i].length
//           word=words[i]
//         }
//     }
//     return word
//   }
// }

// Progression #3: Net Price
// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// function netPrice(numbers){
//   let x=numbers
//   var sum=0
//   if (x==[]){
//     return 0
//   }
//   else{
//     for (let i=0; i< x.length; i++){
//       sum=sum+x[i]
//     }
//   }
//   return sum
// }

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
// const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
// function midPointOfLevels(lst){
//   let sum=0
//   let avrg=0
//   if (lst==0){
//     return null
//   }
//   else{
//     for(let i=0; i<lst.length; i++){
//         sum=sum+lst[i]
//     } 
//     avrg=sum/lst.length
//     return avrg
//   }
// }

// Progression 4.2: Array of strings
// const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
// function averageWordLength(lst){
//   let sum=0
//   let avrg=0
//   if (lst==0){
//     return null
//   }
//   else{
//     for (let i=0; i<lst.length; i++){
//       sum=sum+lst[i].length
//     }
//     avrg=sum/lst.length
//     return avrg
//   }
// }

// function avg(lst){
//   let dumlst=[]
//   let cnt=0
//   let avrg=0
//     if (lst==0){
//       return null
//     }
//     else{
//       for (let i=0; i<lst.length; i++){
//         if ((dumlst.includes(lst[i]))==false){
//           dumlst.push(lst[i])
//           }
//         cnt=cnt+lst[i].length
//         }
//         avrg=cnt/lst.length
//         return avrg  
//       }
//   }
  

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniquifyArray(wordsUnique){
  let lst = wordsUnique
  let dumlst=[]
  let unilst=[]
  let cnt=0
  if (lst==0){
    return null
  }
  else{
    for (let i=0; i<lst.length; i++){
      if ((dumlst.includes(lst[i]))==false){
        dumlst.push(lst[i])
      }
      else{
        cnt=cnt+1
        unilst.push(lst[i])
      }
    }
    return unilst
  }
}


// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];



// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];



// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
