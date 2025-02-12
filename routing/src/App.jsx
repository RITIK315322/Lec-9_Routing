import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
function App() {


  return (
    <BrowserRouter>
      {/* localhost:5173/about  localhost:5173/contact  localhost:5173/ */}

       <Navbar />
     
      <Routes>
        {/* /about  /contact */}

        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      <br />
      <div>Our Footer</div>

    </BrowserRouter>
  )
}

export default App
