import React, { useEffect, useState } from 'react'

const CHATWOOT_API =
  'https://chatwoot.servertesting.tk/api/v1/accounts/2/conversations/180'

const Test = () => {
  const [currentContact, setCurrentContact] = useState({})

  useEffect(() => {
    fetch(CHATWOOT_API, {
      headers: {
        Accept: 'application/json',
        api_access_token: 'yVhhy9ja14JHeTQznz9qri6g',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
    // window.addEventListener('click', function () {
    //   const url = this.window.location.href

    //   //   if (!url.startsWith('http://127.0.0.1:5173/')) return false

    //   const contact_ID = url.toString().substring(url.lastIndexOf('/') + 1)

    //   getUser()
    //   //   getConversationDetail().then((data) => console.log(data))
    // })
  }, [])

  return <div>Test</div>
}

export default Test
