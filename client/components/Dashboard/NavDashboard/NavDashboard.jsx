import "./NavDashBoard.scss"
import {NavLink } from "react-router-dom"
const NavDashBoard = () => {
  
  return (
    <div className='navboard'>
      <h2 className='navboard-title'>Wallet</h2>
      <ul className='navboard-links'>
      <NavLink end to={"/dashboard"} className={({isActive})=> `navboard-links__link ${!isActive ? "" : "active"}` }>
          <span style={{fontSize:"20px"}}>&#128200;</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to={"/dashboard/newTransaction"} className={({isActive})=> `navboard-links__link ${!isActive ? "" : "active"}` }>
        <span style={{fontSize:"20px"}}>&#128210;</span>
        <span>Make Transaction</span> 
        </NavLink>
        <NavLink to={"/dashboard/transactions"} className={({isActive})=> `navboard-links__link ${!isActive ? "" : "active"}` }>
        <span style={{fontSize:"20px"}}>&#128203;</span>
        <span>Transactions</span> 
        </NavLink>
      </ul>
    </div>
  )
}

export default NavDashBoard