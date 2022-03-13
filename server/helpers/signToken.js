

export const sendAuth = (user,stcode,res)=>{
    let token = user.signToken()
    let {username} = user
    res.status(stcode).json({
        token,
        username
    })
}