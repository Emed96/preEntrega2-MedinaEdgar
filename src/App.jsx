import './App.css'
import NavBar from './components/header/NavBar/NavBar'
import ItemListContainer from './components/main/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <header className='Inicio'>
        <NavBar/>
      </header>
      <ItemListContainer/>
    </>
  )
}

export default App
