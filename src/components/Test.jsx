import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CHATWOOT_API =
  'https://chatwoot.servertesting.tk/api/v1/accounts/2/conversations/180'

const Test = () => {
  const [currentContact, setCurrentContact] = useState({})

  useEffect(() => {
    window.addEventListener('message', function (event) {
      console.log(event)
    })
  }, [])

  return <div>Test</div>
}

export default Test
