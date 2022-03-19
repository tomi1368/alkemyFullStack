import React from 'react'
import {useSelector} from "react-redux"
import Transaction from "../Resume/Transaction/Transaction"
import "./Transactions.scss"
const Transactions = () => {
  const transactions = useSelector(state=>state.currentUser.user)
  return (
    <div className='list-transactions'>
      <div className='list-transactions__type'>
      <h2>Ingress transactions</h2>
      {transactions.wallet.transactions.map(elem=> elem.type == "ingress" && <Transaction id={elem._id} createdAt={elem.createdAt} concept={elem.concept} amount={elem.amount} type={elem.type} category={elem.category} key={elem._id} />)}
      </div>
      <div className='list-transactions__type'>
      <h2>Egress Transactions</h2>
      {transactions.wallet.transactions.map(elem=> elem.type == "egress" && <Transaction id={elem._id} createdAt={elem.createdAt}  concept={elem.concept} amount={elem.amount} type={elem.type} category={elem.category} key={elem._id} />)}
      </div>
    </div>
  )
}

export default Transactions