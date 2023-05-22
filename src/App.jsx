import './App.css'
import NavBar from './components/header/NavBar/NavBar'
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/main/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <header className='Inicio'>
        <NavBar/>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route/>
            <Route/>
          </Routes>
        </BrowserRouter>
        <ItemDetailContainer />
      </main>
    </>
  )
}

export default App
