// add solution here
function theBeatlesPlay (music, instruments) {
  var array = []
  for (let i = 0; i < music.length; i++) {
    array.push(`${music[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  var i = facts.length
  var factsExclamation = []
  while (i > 0) {
    factsExclamation[i-1] = `${facts[i-1]}!!!`;
    i--;
  }
  return factsExclamation
}

function iLoveTheBeatles (n) {
  var array = []
  function incrementVariable() {
    const i = n - 1;
  }
  do {
    array.push("I love the beatles!");
  } while (incrementVariable() < 15)
  return array
}
