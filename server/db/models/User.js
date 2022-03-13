import {model,Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required:true,
        minlength: 6
      },
      password: {
        type: String,
        required:true,
        minlength: 6,
        select:false 
      },
      email:{
        type: String,
        required:true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
          ]
      },
      balance:{
          type:Number,
          default:0
      },
      transactions:[
          
      ]
},{versionKey:false})

UserSchema.pre("save", async function(next){
    const user = this
    const SALT = 10
    if(!user.isModified("password")){
      return next()
    }
    try{
      let crypt = await bcrypt.hash(user.password,SALT)
      user.password = crypt
      return next()
    }catch(err){
      return next(err)
    }
  }
  )



UserSchema.methods.signToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET_TOKEN,{expiresIn:process.env.TOKEN_EXPIRES})
}

UserSchema.methods.matchPassword = function(password){
    return bcrypt.compare(password,this.password)
}


export default model("User",UserSchema)
