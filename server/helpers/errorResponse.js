
const errorResponse = (msg,status,res)=>{
    res.status(status).json({
        error:true,
        message:msg
    })
}

export default errorResponse