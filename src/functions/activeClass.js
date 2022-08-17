const activeClass = (classname, isActive) => {
  return `${classname} ${isActive ? '--active' : ''}`
}

export { activeClass }
