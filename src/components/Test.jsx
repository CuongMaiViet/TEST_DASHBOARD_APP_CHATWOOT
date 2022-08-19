import React, { useState } from 'react'
import { isJSON } from '../functions'
import useEvent from '../hooks/useEvent'

const CHATWOOT_API =
  'https://chatwoot.servertesting.tk/api/v1/accounts/2/conversations/180'

const retrieveChatwootData = (event) => {
  if (!isJSON(event.data)) return

  const data = JSON.parse(event.data)
  console.log(data)
}

const Test = () => {
  const [currentContact, setCurrentContact] = useState({})

  useEvent('message', retrieveChatwootData)

  return <div>Test</div>
}

export default Test
