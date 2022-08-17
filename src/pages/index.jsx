import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profiles from './Profiles/Profiles'
import './index.css'
import { Navbar } from '../components'
import { useStateContext } from '../context/ContextProvider'
import { activeClass } from '../functions'

const Pages = () => {
  const { activeMenu } = useStateContext()

  return (
    <div className={activeClass('pages', activeMenu)}>
      <Navbar />
      <div className="pages__routes">
        <Routes>
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </div>
    </div>
  )
}

export default Pages
