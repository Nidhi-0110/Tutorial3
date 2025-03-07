import Home from "./components/Home"
import About from "./components/About"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Form1 from "./components/Form1"
import Form2 from "./components/Form2"

function App() {
  return (
    <div>
       <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About />}/>
              <Route path="/form1" element={<Form1/>}/>
              <Route path="/form2" element={<Form2/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App