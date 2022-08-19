const countCharacter = (string, character) => {
  let count = 0
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == character) {
      //counting : or ,
      count++
    }
  }
  return count
}

export default countCharacter
