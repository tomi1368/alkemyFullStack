import React from 'react'
import { Link } from 'react-router-dom'
import "./Transaction.scss"
const Transaction = ({concept,amount,type,category,createdAt,id}) => {
    const typeStyle = type == "ingress" ? "gain" : "lost"
    return (
    <Link style={{color:"#000"}} to={`/dashboard/${id}`}>
    <div className='transaction'> 
        <p className='transaction-concept'>{concept}</p>
        <h3 className={`transaction-amount ${typeStyle}`}>{`$${amount}`}</h3>
        <h3>{new Date(createdAt).toLocaleDateString()}</h3>
        <h3 className='transaction-category'>{category}</h3>
    </div>
    </Link>
  )
}

export default Transaction