

export const sendAuth = (user,stcode,res)=>{
    let token = user.signToken()
    res.status(stcode).json({
        token,
        user
    })
}