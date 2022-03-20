import Transaction from "../db/models/Transaction.js"
import Wallet from "../db/models/Wallet.js"
import errorResponse from "../helpers/errorResponse.js"

export const createTransaction = async (req,res)=>{
    const {concept,amount,type,category,date} = req.body
    const {wallet} = req.user
    console.log(req.body)
    const newTransaction = new Transaction({
        concept,
        amount,
        type,
        category,
        date
    })
    try{
        let createdTransaction = await newTransaction.save()
        let updatedWallet = await Wallet.findByIdAndUpdate( wallet._id,
            {$push: {"transactions": createdTransaction._id},
            $inc:{"balance":type == "ingress" ? amount : -amount}
            },
            {new: true})
        res.status(200).json({transaction:createdTransaction,wallet:updatedWallet})
    }catch(err){
        errorResponse(err.message,404,res)
    }
}


export const deleteTransaction = async (req,res)=>{
    const {id} = req.body
    const {wallet} = req.user
    try {
        const deleteTransaction = await Transaction.findByIdAndDelete(id)
        if(!deleteTransaction) return errorResponse("Transaction not found",404,res)
        const updatedWallet = await Wallet.findByIdAndUpdate(wallet._id,{
            $pull:{transactions:{$in:[deleteTransaction._id]}},
            $inc:{balance: deleteTransaction.type == "ingress" ? -deleteTransaction.amount : deleteTransaction.amount }
        },{new:true})
        res.status(200).json({transaction:deleteTransaction,wallet:updatedWallet})
    } catch (err) {
        errorResponse(err.message,404,res)
    }
}



export const modifyTransaction = async (req,res)=>{
    const {concept,amount,category,oldAmount,date} = req.body.value
    const {wallet} = req.user
    const id = req.body.id
    try{
        const foundedTransaction = await Transaction.findByIdAndUpdate(id,{
            concept,
            amount,
            category,
            date
        },{new:true})
        if(!foundedTransaction) return errorResponse("Transaction not found",404,res)
        const updatedWallet = await Wallet.findByIdAndUpdate(wallet._id,{
            $inc:{"balance": foundedTransaction.type == "ingress" ? (-oldAmount + amount ) : (oldAmount - amount)  }
        },{new:true})
        console.log(updatedWallet)
        if(!updatedWallet) return errorResponse("Wallet not found",404,res)
        res.status(200).json({transaction:foundedTransaction,wallet:updatedWallet})
    }catch(err){
        errorResponse(err.message,404,res)
    }
}
