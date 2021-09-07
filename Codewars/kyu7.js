// ## Problem: Categorize New Member ##

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// ## Solution ##

// Less typing solution
function openOrSenior(data) {
  return data.map((val) => {
    return val[0] >= 55 && val[1] > 7 ? "Senior" : "Open";
  });
}

// more readable solution

function openOrSeniorReadabilitty(data) {
  return data.map(function loopCheck([age, handicap]) {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}

// ## Problem: Friend or Foe? ##

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Otherwise, you can be sure he's not...

// ## Solution ##

function friend(friends) {
  return friends.filter((name) => name.length == 4);
}
