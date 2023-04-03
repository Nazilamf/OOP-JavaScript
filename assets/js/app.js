
// TASK - 1
var numbers = [12,25,4,96,3,20,78]

function ShowMin(Arrays){

   if(Array.isArray(Arrays)=== true) {
    var min=Arrays[0]
    for (let index = 0; index < Arrays.length; index++) {
        if(Arrays[index]<min){
            min= Arrays[index]
             }  
    }
    
   }
   else{
    alert('Array deyil')
   }
   return min
}

console.log(ShowMin(numbers));


// TASK - 2
var word = 'Salam'

function ShowSameChar(anyword){
   
        var char = word[0]
        var chars = new Array;
        for (let index = 0; index < anyword.length; index++) {
           for (let index1 =index+1; index1 < anyword.length; index1++) {
            if(anyword[index]===anyword[index1]){
               chars.push(anyword[index])
                }
            
           }
            
        }
        return chars
    }
    
console.log(ShowSameChar(word));

// TASK - 3

let sentence = "Life is beautiful"

function CountWord(anystring){

 const newArray = anystring.split(' ');
 
  return newArray.length

}

console.log(CountWord(sentence))


// Task - 4

function IsPalindrome(anystr) {
    for (let i = 0; i < anystr.length / 2; i++) {
      if (anystr[i] !== anystr[anystr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }


  console.log(IsPalindrome('ada'))