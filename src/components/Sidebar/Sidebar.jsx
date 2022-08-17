import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { logo } from '../../assets'

import { useStateContext } from '../../context/ContextProvider'

import './index.css'
import { activeClass } from '../../functions'

const Sidebar = ({ data }) => {
  const { activeMenu } = useStateContext()

  return (
    <div className={activeClass('sbr__main', activeMenu)}>
      <div className="sbr__container">
        <div className="sbr__top">
          <Link to={'/'}>
            <img className="sbr__img" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="sbr__body">
          {data.map((item) => (
            <div key={item.title}>
              <p className="sbr__folder">{item.title}</p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.to}`}
                  key={link.name}
                  onClick={() => {}}
                  className={({ isActive }) =>
                    `sbr__link ${isActive ? '--active' : ''}`
                  }
                >
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        <div className="sbr__bottom"></div>
      </div>
    </div>
  )
}

export default Sidebar
