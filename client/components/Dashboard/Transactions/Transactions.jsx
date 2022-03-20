import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { filters } from './mocks/filterNames'
import Transaction from "../Resume/Transaction/Transaction"
import "./Transactions.scss"
const Transactions = () => {
  const transactions = useSelector(state=>state.currentUser.user)
  const [sort,setSort] = useState("newest")
  const [filter,setFilter] = useState("All")
  const [sortedTransactions,setSortedTransactions] = useState([])
  console.log(filter)
  useEffect(()=>{
    setSortedTransactions(state=>[...state].sort((a,b)=> sort == "newest" ? (new Date(b.date) - new Date(a.date)) : (new Date(a.date) - new Date(b.date))) )
  },[sort,filter])
  useEffect(()=>{
    setSortedTransactions([...transactions.wallet.transactions].sort((a,b)=> sort == "newest" ? (new Date(b.date) - new Date(a.date)) : (new Date(a.date) - new Date(b.date))))
  },[])
  useEffect(()=>{
    if(filter=="All"){
      setSortedTransactions(transactions.wallet.transactions)
    }else{
      setSortedTransactions(transactions.wallet.transactions.filter(el=>el.category == filter))
    }
  },[filter])
  return (
    <div className='list-transactions'>
      <div className='list-transactions__type__header'>
      <h2>Ingress transactions</h2>
      <div className='list-transactions__type__header__filter' >
      <select onChange={(e)=>setFilter(e.target.value)} name="filter">
      {filters.map(el=>{
        return(
          <option value={el}>{el}</option>
        )
      })}
      </select>
      <select onChange={(e)=>setSort(e.target.value)} name="sort" id="">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
      </select>
      </div>
      </div>
      <div className='list-transactions__type'>
      {sortedTransactions.map(elem=> elem.type == "ingress" && <Transaction id={elem._id} createdAt={elem.date} concept={elem.concept} amount={elem.amount} type={elem.type} category={elem.category} key={elem._id} />)}
      </div>
      <div className='list-transactions__type'>
      <h2>Egress Transactions</h2>
      {sortedTransactions.map(elem=> elem.type == "egress" && <Transaction id={elem._id} createdAt={elem.date}  concept={elem.concept} amount={elem.amount} type={elem.type} category={elem.category} key={elem._id} />)}
      </div>
    </div>
  )
}

export default Transactions