import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CHATWOOT_API =
  'https://chatwoot.servertesting.tk/api/v1/accounts/2/conversations/180'

const isJSON = (json) => {
  //Nested Count function only to be used for counting colons and commas
  countCharacter = (string, character) => {
    count = 0
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) == character) {
        //counting : or ,
        count++
      }
    }
    return count
  }

  json = json.trim() // remove whitespace, start and end spaces

  //check starting and ending brackets
  if (json.charAt(0) != '{' || json.charAt(json.length - 1) != '}') {
    console.log('Brackets {} are not balanced')
    return false
  }
  //else this line will check whether commas(,) are one less than colon(:)
  else if (!(countCharacter(json, ':') - 1 == countCharacter(json, ','))) {
    console.log('comma or colon are not balanced')
    return false
  } else {
    json = json.substring(1, json.length - 1) //remove first and last brackets
    json = json.split(',') //split string into array, and on each index there is a key-value pair

    //this line iterate the array of key-value pair and check whether key-value string has colon in between
    for (var i = 0; i < json.length; i++) {
      pairs = json[i]

      if (pairs.indexOf(':') == -1) {
        //if colon not exist in b/w

        console.log('No colon b/w key and value')
        return false
      }
    }
  }
  return true
}

const Test = () => {
  const [currentContact, setCurrentContact] = useState({})

  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (!isJSON(event.data)) return

      const data = JSON.parse(event.data)
      console.log(data)
    })
  }, [])

  return <div>Test</div>
}

export default Test
