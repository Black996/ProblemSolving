// ## Problem ##
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// ## Solution

function array_diff(a, b) {
  return a.filter((el) => !b.includes(el));
}

// ## Problem ##

// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// ## Solution ##

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

// ## Problem: Bouncing Balls ##
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
// Three conditions must be met for a valid experiment:
// # Float parameter "h" in meters must be greater than 0
// # Float parameter "bounce" must be greater than 0 and less than 1
// # Float parameter "window" must be less than h.
// Note: The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// ## Solution ##

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let observations = 1;
  let lastHeight = h * bounce;
  let bounceHeight = lastHeight;

  while (bounceHeight > window) {
    observations = observations + 2;
    bounceHeight = bounceHeight * bounce;
  }

  return observations;
}
