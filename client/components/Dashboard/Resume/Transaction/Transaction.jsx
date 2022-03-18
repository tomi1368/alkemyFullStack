import React from 'react'
import "./Transaction.scss"
const Transaction = ({concept,amount,type,category,createdAt}) => {
    const typeStyle = type == "ingress" ? "gain" : "lost"
    return (
    <div className='transaction'> 
        <p className='transaction-concept'>{concept}</p>
        <h3 className={`transaction-amount ${typeStyle}`}>{`$${amount}`}</h3>
        <h3>{new Date(createdAt).toLocaleDateString()}</h3>
        <h3 className='transaction-category'>{category}</h3>
    </div>
  )
}

export default Transaction