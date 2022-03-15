import Transaction from "../db/models/Transaction.js"
import Wallet from "../db/models/Wallet.js"
import errorResponse from "../helpers/errorResponse.js"

export const createTransaction = async (req,res)=>{
    const {concept,amount,type,category} = req.body
    const {wallet} = req.user
    const newTransaction = new Transaction({
        concept,
        amount,
        type,
        category
    })
    try{
        let createdTransaction = await newTransaction.save()
        await Wallet.findByIdAndUpdate( wallet._id,
            {$push: {"transactions": createdTransaction._id},
            $inc:{quantity:type == "ingress" ? 1 : -1,"balance":amount}
            },
            {new: true})
        res.status(200).json(createdTransaction)
    }catch(err){
        errorResponse(err.message,404,res)
    }
}


