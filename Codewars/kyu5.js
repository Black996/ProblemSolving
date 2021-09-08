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
