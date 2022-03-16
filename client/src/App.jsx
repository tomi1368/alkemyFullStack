import {Routes,Route} from "react-router-dom"
import Dashboard from "../components/Dashboard/Dashboard"
import Resume from "../components/Dashboard/Resume/Resume"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import Transactions from "../components/Dashboard/Transactions/Transactions"
import "./App.scss"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route  path="dashboard" element={<Dashboard/>}> 
        <Route path="" element={<Resume></Resume>}></Route>
        <Route path="newTransaction" element={<Transactions></Transactions>}></Route>
      </Route>
    </Routes>
  )
}

export default App
