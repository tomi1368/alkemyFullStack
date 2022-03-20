import React from "react";
import "./Resume.scss"
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import Transaction from "./Transaction/Transaction";
import { logout } from "./helpers/logout";
const Resume = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const transactions = useSelector(state=>state.currentUser.user)
  const firstTen = [...transactions.wallet.transactions].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)).slice(0,10)
  return (
    <div className="wallet-wrapper">
      <div className="wallet">
        <div className="wallet-current">
          <h2>Current Balance</h2>
          <h3>{`$ ${transactions.wallet.balance}`}</h3>
        </div>
        <div className="wallet-transactions">
          <h3>Last Transactions</h3>
          <div className="wallet-transactions__list">
            {firstTen.map(el=><Transaction id={el._id} concept={el.concept}  amount={el.amount} type={el.type} category={el.category} createdAt={el.date}  key={el._id}/> )}
          </div>
        </div>
      </div>
      <div className="profile">
        <h3 className="profile-title">My Profile</h3>
        <div className="profile-image">
          <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" />
        </div>
        <h3 className="profile-title">{transactions.username}</h3>
        <button onClick={()=>logout(dispatch,navigate)} className="profile-logout">Logout</button>
      </div>
    </div>
  );
};

export default Resume;
