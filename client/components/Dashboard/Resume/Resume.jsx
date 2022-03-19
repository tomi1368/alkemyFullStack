import React from "react";
import "./Resume.scss"
import {useSelector} from "react-redux"
import Transaction from "./Transaction/Transaction";
const Resume = () => {
  const transactions = useSelector(state=>state.currentUser.user)
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
            {transactions.wallet.transactions.map(el=><Transaction id={el._id} concept={el.concept} amount={el.amount} type={el.type} category={el.category} createdAt={el.createdAt}  key={el._id}/> )}
          </div>
        </div>
      </div>
      <div className="profile">
        <h3 className="profile-title">My Profile</h3>
        <div className="profile-image">
          <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" />
        </div>
        <h3 className="profile-title">{transactions.username}</h3>
      </div>
    </div>
  );
};

export default Resume;
