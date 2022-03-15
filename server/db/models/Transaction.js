import mongoose from "mongoose";


const {model,Schema} = mongoose

const TransactionSchema = new Schema({
    concept:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true,
        match:[/ingress|egress/,"Provide a correct type "]
    },
    category:{
        type:String
    }
},{timestamps:true,versionKey:false})

const Transaction = model("Transaction",TransactionSchema)






export default Transaction


