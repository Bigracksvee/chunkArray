//       //1.) Basic Algorithm Scripting: Convert Celsius to Fahrenheit
//       The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
function convertToF(celsius) {
    var fahrenheit = (celsius * (9/5)) +32;
    return fahrenheit;
  }
  
  convertToF(30);
 
 //2.)Basic Algorithm Scripting: Reverse a String
//  Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.
function reverseString(str) {
  for (var reversedStr = '', i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }
    return reversedStr;
  }
  
  reverseString("hello");
      //Starting at the last character of the string passed to the function, you build a new string reversedStr from str.
      //During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.   
      //Finally, you return the final value of reversedStr.
    
 
 //3.)Basic Algorithm Scripting: Factorialize a Number

//  Return the factorial of the provided integer.

//  If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 
//  Factorials are often represented with the shorthand notation n!
 
//  For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 
//  Only integers greater than or equal to zero will be supplied to the function.
function factorialize(num) {
    var answer = 1;
    for(var i = 1; i <= num; i++){
      answer *= i;
      console.log(answer);
    }
    return answer;
  }
  
  factorialize(5);
//4.)Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
function findLongestWordLength(str) {
    var words= str.split(' ');
    console.log(words);
    var maxLength = 0;
    for (var i = 0; i < words.length; i++){
      console.log(i);
      if(words[i].length> maxLength){
        maxLength = words [i].length;
      }
    }
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

      //Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

      //Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.


// //5.) Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++){
      let largestNum = arr[i][0];
      for(let j = 1; j < arr[i].length; j++){
        if(arr[i][j] > largestNum){
          largestNum = arr[i][j];
        }
      }
      results[i] = largestNum;
    }
    return results;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
 //6.)Basic Algorithm Scripting: Confirm the Ending
//  Check if a string (first argument, str) ends with the given target string (second argument, target).

//  This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 
 
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");
      
     /* First we use the slice method copy the string.
      In order to get the last characters in str equivalent to the target's length we use the slice method.
      The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
      For example str.slice(10, 17) would return give me.
      In this case we only include one parameter which it will copy everything from the starting index.
      We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
      Finally we compare the return result of slice to target and check if they have the same characters.*/


//7.) Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';
    while(num > 0){
      accumulatedStr += str;
      num--;
    }
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

//8.)Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//Truncate means to shorten something by cutting off the top or end

function truncateString(str, num) {
    if(str.length > num){
      return str.slice(0, num) + "...";
    } else {
      return str;
    };
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  //.9)Basic Algorithm Scripting: Finders Keepers
//   Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
    let num = 0;
    
    for(let i = 0; i < arr.length; i++){
      num = arr[i];
      if(func(num)){
        return num;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
//10.) Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    return typeof bool === 'boolean';
  }
  
  booWho(null);
  //11.)Basic Algorithm Scripting: Title Case a Sentence
//   Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//   For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
function titleCase(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(val +> val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
  }
  
  titleCase("I'm a little tea pot");



//12.)Basic Algorithm Scripting: Slice and Splice
// /You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

//13.)Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
      if(arr[i]) newArray.push(arr[i]);
    }
    return newArray
  }
  
  bouncer([7, "ate", "", false, 9]);

/* We create a new empty array.
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 1.1k or falsy 926.
If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
We return the new array (newArray).*/

//14.) Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++){
      if(arr[i] >= num)
      return i;
    }
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);

//15.) Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++){
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);

/* First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them are not found we return false.

If they are all found, the loop will finish without returning anything and we get to return true.*/

//16.) Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let i = 0;

    while(i< arr.length){
      newArr.push(arr.slice(i,i + size))
      i += size;
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
