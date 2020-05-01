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
  while (i > 0) {
    facts[i] = `${facts[i]}!!!`
    --i
  }
}
