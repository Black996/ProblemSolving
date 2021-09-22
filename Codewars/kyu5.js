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

// ## Problem: RGB To Hex Conversion ##
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in
// a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// ## Solution ##

function rgb(r, g, b) {
  // complete this function
  r = r < 0 ? 0 : r > 255 ? 255 : r;
  g = g < 0 ? 0 : g > 255 ? 255 : g;
  b = b < 0 ? 0 : b > 255 ? 255 : b;

  r =
    r.toString(16) == 0
      ? "00"
      : r.toString(16).toUpperCase().length == 1
      ? `0${r.toString(16).toUpperCase()}`
      : r.toString(16).toUpperCase();
  g =
    g.toString(16) == 0
      ? "00"
      : g.toString(16).toUpperCase().length == 1
      ? `0${g.toString(16).toUpperCase()}`
      : g.toString(16).toUpperCase();
  b =
    b.toString(16) == 0
      ? "00"
      : b.toString(16).toUpperCase().length == 1
      ? `0${b.toString(16).toUpperCase()}`
      : b.toString(16).toUpperCase();

  return `${r}${g}${b}`;
}

// ## Problem: Directions Reduction ##
// Write a function dirReduc which will take an array of strings and returns an array of strings
// with the needless directions removed (W<->E or S<->N side by side).

// Solution

function dirReduc(arr) {
  let redo = false;
  let i = 0;
  while (i < arr.length - 1) {
    if (
      (arr[i] == "WEST" && arr[i + 1] == "EAST") ||
      (arr[i + 1] == "WEST" && arr[i] == "EAST")
    ) {
      arr.splice(i, 2);
      redo = true;
    } else if (
      (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") ||
      (arr[i + 1] == "NORTH" && arr[i] == "SOUTH")
    ) {
      arr.splice(i, 2);
      redo = true;
    }
    if (redo) {
      i = 0;
      redo = false;
    } else {
      i++;
    }
  }
  return arr;
}

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
