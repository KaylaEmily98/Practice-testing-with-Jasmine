//function myFind(arr, callback){
  //  for (let i=0; i< arr.legnth; i++){
    //    if(callback(arr[i], i, arr)===tru) return arr[i]
    
   // }

//}
//myFind (scores, function9score{
 //score > 91
//})

//myFind

//arr.findIndex(function(value, index, array){
  //return value < 2;
//}); 

//let arr = [1,2,3];

//arr.findIndex(function(value, index, array){
  //return value > 3;
//}); 
const words =[ 'meliisa' , 'julie', "kayla", "thomas"];
const results=words.reduce(function(accum, nextWord){
console.log(accum, nextWord);
return accum + nextWord;
});
const midTermScores =[70,88, 93, 94, 64,62,56];
//const minScore=midTermScores.reduce(function(min, nextScore){
//if(nextScore < min){
  //  return nextScore;
//}
//return min;
//});
const minScore = midTermScores.reduce (function(min, nextScore){
    return nextScore < min ? nextScore: min;
});

