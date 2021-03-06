import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import Wallet from "./Wallet.js"

const {Schema,model} = mongoose

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
      wallet:{
          type:Schema.Types.ObjectId,
          ref:"Wallet"
      }
},{versionKey:false})


UserSchema.pre("save", async function(next){
  try{
    let newWallet = new Wallet({
      walletOwner:this._id
    })
    let createdWallet = await newWallet.save()
    this.wallet = createdWallet._id
    return next()
  }catch(err){
    return next(err)
  }
} )


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
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.TOKEN_EXPIRES})
}

UserSchema.methods.matchPassword = function(password){
    return bcrypt.compare(password,this.password)
}



const User = model("User",UserSchema)

export default User