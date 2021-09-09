// ## Problem: Simple Pig Latin ##

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// ## Solution ##

function pigIt(str) {
  // loop through every word
  // replace the first word of it at to be the end of it and add ay to the end of it
  // ignore any special characters
  const regexTest = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return str
    .split(" ")
    .map((word) => {
      if (!regexTest.test(word)) {
        return word.substring(1) + word.substring(0, 1) + "ay";
      }
      return word;
    })
    .join(" ");
}

// ## Problem: Moving Zeros To The End ##

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// ## Solution ##

var moveZeros = function (arr) {
  // To check where to start putting the zeros
  let zeroPointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[zeroPointer] = arr[i];
      zeroPointer++;
    }
  }
  for (let i = zeroPointer; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};
