import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { HomePage } from './page/HomePage/HomePage'
import { GamePage } from './page/GamePage/GamePage'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='game' element={<GamePage />} />
      </Routes>
    </>
  )
}

export default App
