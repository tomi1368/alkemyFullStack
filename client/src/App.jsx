import {Routes,Route} from "react-router-dom"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import "./App.scss"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}> 
        <Route></Route>
        <Route></Route>
      </Route>
    </Routes>
  )
}

export default App
