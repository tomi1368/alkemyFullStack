import React from "react";
import "./Resume.scss"
import {useSelector} from "react-redux"
import Transaction from "./Transaction/Transaction";
const Resume = () => {
  const transactions = useSelector(state=>state.currentUser.user.wallet.transactions)
  return (
    <div className="wallet-wrapper">
      <div className="wallet">
        <div className="wallet-current">
          <h2>Current Balance</h2>
          <h3>$78.0000</h3>
        </div>
        <div className="wallet-transactions">
          <h3>Last Transactions</h3>
          <div className="wallet-transactions__list">
            {transactions.map(el=><Transaction key={el._id}/> )}
          </div>
        </div>
      </div>
      <div className="profile">
        <h3 className="profile-title">My Profile</h3>
        <div className="profile-image">
          <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" />
        </div>
        <h3 className="profile-title">Username</h3>
      </div>
    </div>
  );
};

export default Resume;
