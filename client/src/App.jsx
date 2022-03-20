import {Routes,Route} from "react-router-dom"
import Dashboard from "../components/Dashboard/Dashboard"
import Resume from "../components/Dashboard/Resume/Resume"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import Transactions from "../components/Dashboard/Transactions/Transactions"
import "./App.scss"
import CreateTransaction from "../components/Dashboard/CreateTransaction/CreateTransaction"
import ChangeTransactions from "../components/Dashboard/ChangeTransactions/ChangeTransactions"
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
function App() {
  const user = useSelector(state=>state.currentUser)
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={
      user ? (<Navigate replace to="/dashboard"></Navigate>) : <Login/>
      }/>
      <Route path="/register" element={
        user ? (<Navigate replace to="/dashboard"></Navigate>) : <Register/>
      }/>
      <Route  path="dashboard" element={!user ? (<Navigate replace to="/"></Navigate>) : <Dashboard/>}> 
        <Route path="" element={<Resume></Resume>}></Route>
        <Route path="newTransaction" element={<CreateTransaction/>}></Route>
        <Route path="transactions" element={<Transactions/>} />
        <Route path="/dashboard/:id" element={<ChangeTransactions/>}/>
      </Route>
    </Routes>
  )
}

export default App
