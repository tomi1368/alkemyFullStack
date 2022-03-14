import Transaction from "../db/models/Transaction"
import errorResponse from "../helpers/errorResponse"

export const createTransaction = async (req,res)=>{
    const {concept,amount,type,category} = req.body
    const newTransaction = new Transaction({
        concept,
        amount,
        type,
        category
    })
    try{
        let createdNote = await newTransaction.save()
        res.status(200).json(createdNote)
    }catch(err){
        errorResponse(err.message,404,res)
    }
}


