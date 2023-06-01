import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/home/Home';

function App() {
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Home />}/>
      </Routes>
      
      
    </>
  )
}

export default App
