import {model,Schema} from "mongoose"


const WalletSchema = new Schema({
    balance:{
        type:Number,
        default:0
    },
    transactions:[{
        type:Schema.Types.ObjectId,
        ref:"Transaction",
        default:[]
    }],
    walletOwner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})


const Wallet = model("Wallet",WalletSchema)


WalletSchema.methods.makeTransaction = function(amount,type){
    if(type == "Ingress"){
        this.balance += amount
    }else{
        this.balance -= amount
    }
}





export default Wallet