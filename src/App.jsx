import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/home/Home';
import { Contact } from './components/pages/contact/Contact';

function App() {
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      
      
    </>
  )
}

export default App
