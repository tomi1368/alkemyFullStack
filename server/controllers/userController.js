import User from "../db/models/User"
import errorResponse from "../helpers/errorResponse"
import { sendAuth } from "../helpers/signToken"

export const login = async (req,res)=>{
    let {username,password} = req.body
    try{
        const userFind = User.findOne({username}).select("+password")
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
        sendAuth(userCreated,200,res)
    } catch (err) {
        errorResponse(err.message,404,res)
    }
}