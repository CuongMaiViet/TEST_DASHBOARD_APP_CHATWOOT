import React from 'react'
import './index.css'
import { useStateContext } from '../../context/ContextProvider'
import { activeClass } from '../../functions'

const NavButton = ({ title, customFunc, icon, color, dotColor, type }) => (
  <button className={title} onClick={customFunc} type={type}></button>
)

const ToggleSidebar = ({ className, isActive, customFunc }) => (
  <div className={activeClass(className, isActive)} onClick={customFunc}>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  return (
    <div className={activeClass('navbar', activeMenu)}>
      <ToggleSidebar
        className={'toggle'}
        isActive={activeMenu}
        customFunc={() => setActiveMenu((prevState) => !prevState)}
      />
      <div className="navbar__right">
        navbar
        <NavButton
          title={'toggle'}
          type={'button'}
          customFunc={(prevState) => setActiveMenu(!prevState)}
        />
        <NavButton
          title={'toggle'}
          type={'button'}
          customFunc={(prevState) => setActiveMenu(!prevState)}
        />
        <NavButton
          title={'toggle'}
          type={'button'}
          customFunc={(prevState) => setActiveMenu(!prevState)}
        />
        <NavButton
          title={'toggle'}
          type={'button'}
          customFunc={(prevState) => setActiveMenu(!prevState)}
        />
        <NavButton
          title={'toggle'}
          type={'button'}
          customFunc={(prevState) => setActiveMenu(!prevState)}
        />
      </div>
    </div>
  )
}

export default Navbar
