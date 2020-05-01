// add solution here
function theBeatlesPlay (music, instruments) {
  var array = []
  for (let i = 0; i <= music.length; i++) {
    array.push(`${instruments[i]} plays ${instruments[i]}`)
  }
  return array
}
