import Transaction from "../db/models/Transaction.js"
import Wallet from "../db/models/Wallet.js"
import errorResponse from "../helpers/errorResponse.js"

export const createTransaction = async (req,res)=>{
    const {concept,amount,type,category} = req.body
    const {wallet} = req.user
    console.log(req.body)
    const newTransaction = new Transaction({
        concept,
        amount,
        type,
        category
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
    try {
        const deleteTransaction = await Transaction.findByIdAndDelete(id)
        if(!deleteTransaction) return errorResponse("Transaction not found",404,res)
        res.status(200).json(deleteTransaction)
    } catch (err) {
        errorResponse(err.message,404,res)
    }
}



export const modifyTransaction = async (req,res)=>{
    const {concept,amount,category,id} = req.body
    try{
        const foundedTransaction = await Transaction.findByIdAndUpdate(id,{
            concept,
            amount,
            category
        },{new:true})
        if(!foundedTransaction) return errorResponse("Transaction not found",404,res)
        res.status(200).json(foundedTransaction)
    }catch(err){
        errorResponse(err.message,404,res)
    }
}
