function theBeatlesPlay(musicians, instruments) {
<<<<<<< HEAD
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factsp) {
  const facts = []
  let i = 0
  while (i < factsp.length) {
    facts.push(`${factsp[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(i) {
  const array = []
  do {
    array.push('I love the Beatles!')
    i++
  } while (i < 15)
  return array
=======
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
 function johnLennonFacts() {
  var facts = [];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}
 function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
>>>>>>> d9a29ce125c92c97fdf54a8a58654ee70617415d
}
