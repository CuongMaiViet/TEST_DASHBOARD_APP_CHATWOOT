import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  toggle: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)

  const state = {
    activeMenu,
    setActiveMenu,
  }

  return <StateContext.Provider value={state}>{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext)
