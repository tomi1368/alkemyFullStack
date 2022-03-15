import jwt from "jsonwebtoken"
import User from "../db/models/User.js"
import errorResponse from "../helpers/errorResponse.js"

const authToken = async (req,res,next)=>{
    let token;
    let auth = req.get("Authorization")
    if(auth && auth.startsWith("Bearer")) token= auth.split(" ")[1]
    if(!token || token=="") return errorResponse("Not authorized to access",404,res)
    try{
        let decodifed = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decodifed.id)
        if(!user) return errorResponse("Not authorizated to access",404,res)
        req.user = user
        next()
    }catch(err){
        return errorResponse(err.message,404,res)
    }

}

export default authToken