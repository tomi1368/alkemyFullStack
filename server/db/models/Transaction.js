import {model,Schema} from "mongoose";

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
},{timestamps:true})

const Transaction = model("Transaction",TransactionSchema)






export default Transaction


