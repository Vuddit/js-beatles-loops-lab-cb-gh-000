// add solution here
function theBeatlesPlay (music, instruments) {
  var array = []
  for (let i = 0; i < music.length; i++) {
    array.push(`${music[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  const i = facts.length
  var factsExclamation = []
  while (i > 1) {
    //factsExclamation[i] = `${facts[i]}!!!`
    //i--
    return facts[i]
  }
  return facts
}
