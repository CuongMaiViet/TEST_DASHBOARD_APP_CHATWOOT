import React, { useEffect } from 'react'

const Profiles = () => {
  useEffect(() => {
    window.addEventListener('message', function (event) {
      // if (!isJSONValid(event.data)) {
      //   return
      // }

      const eventData = JSON.parse(event.data)

      console.log('Event' + event)
    })

    console.log('new')
  }, [])
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea adipisci
      nobis harum, quis ipsa placeat magni fuga sequi necessitatibus laudantium
      blanditiis maxime alias vitae labore aspernatur veniam ut, dignissimos
      distinctio. Explicabo impedit veniam repudiandae nam qui labore, numquam
      reprehenderit sit tempora quo similique! Eaque, ducimus officia, obcaecati
      dignissimos delectus facilis pariatur dolores similique consectetur
      deserunt tempora facere quis quia reprehenderit! Ipsum reiciendis animi
      alias voluptatem iusto eaque vitae soluta assumenda. Quas omnis deserunt
      magni vitae. Nulla, magnam hic reprehenderit unde eaque nostrum! Quod
      repellendus alias molestias temporibus officia ut dolore. Harum molestias
      nisi voluptate pariatur expedita repellendus animi facilis exercitationem,
      eaque sapiente labore vero fuga, id laborum ipsum quis fugiat in dicta
      maiores sequi quam sunt rerum neque dignissimos! Temporibus. Laboriosam
      praesentium libero molestias impedit, esse dolorem facilis hic
      necessitatibus est laborum vero quaerat quisquam amet nobis suscipit,
      dolore voluptate ut laudantium totam veniam illo? Vitae iure accusamus
      repellat laborum.
    </div>
  )
}

export default Profiles
