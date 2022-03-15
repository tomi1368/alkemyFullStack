import User from "../db/models/User.js"
//import Wallet from "../db/models/Wallet"
import errorResponse from "../helpers/errorResponse.js"
import { sendAuth } from "../helpers/signToken.js"

export const login = async (req,res)=>{
    let {username,password} = req.body
    try{
        const userFind = await User.findOne({username}).select("+password").populate({
            path:"wallet",
            populate:{
                path:"transactions",
                model:"Transaction"
            }
        })
        console.log(userFind)
        if(!userFind) return errorResponse("Not found user",404,res)
        const match = await userFind.matchPassword(password)
        if(!match) return errorResponse("Password dont match",404,res)
        sendAuth(userFind,200,res)
    }catch(err){
        errorResponse(err.message,404,res)
    }

}



export const register = async (req,res)=>{
    let user = req.body
    try {
        const newUser = new User(user)
        const userCreated = await newUser.save()
       /*  const newWallet = new Wallet({
            walletOwner:userCreated._id
        })
        await newWallet.save() */
        sendAuth(userCreated,200,res)
    } catch (err) {
        errorResponse(err.message,404,res)
    }
}