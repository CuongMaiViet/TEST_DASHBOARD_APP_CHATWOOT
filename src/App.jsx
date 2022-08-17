import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Sidebar } from './components'
import { sidebarData } from './dummy'
import Pages from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar data={sidebarData} />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
