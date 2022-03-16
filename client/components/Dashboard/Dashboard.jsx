import React from 'react'
import NavDashBoard from './NavDashboard/NavDashboard'
import {Outlet} from "react-router-dom"
import "./Dashboard.scss"
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <NavDashBoard/>
        <Outlet/>
    </div>
  )
}

export default Dashboard