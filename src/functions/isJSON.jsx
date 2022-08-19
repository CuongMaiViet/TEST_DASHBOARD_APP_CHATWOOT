import { countCharacter } from '.'

const isJSON = (json) => {
  if (!(json && typeof json === 'string')) return

  let is_json = true //true at first

  //Try-catch and JSON.parse function is used here.
  try {
    const object = JSON.parse(json)
  } catch (error) {
    is_json = false
    console.log("might be a problem in key or value's data type")
  }

  if (!is_json) {
    json = json.trim() // remove whitespace, start and end spaces

    if (json.charAt(0) != '{' || json.charAt(json.length - 1) != '}') {
      console.log('Brackets {} are not balanced')
    } else if (!(countCharacter(json, ':') - 1 == countCharacter(json, ','))) {
      console.log('comma or colon are not balanced')
    } else {
      json = json.substring(1, json.length - 1) //remove first and last brackets
      json = json.split(',')

      for (var i = 0; i < json.length; i++) {
        const pairs = json[i]
        if (pairs.indexOf(':') == -1) {
          //if colon not exist in b/w
          console.log('No colon b/w key and value')
        }
      }
    }
  }

  return is_json
}

export default isJSON
