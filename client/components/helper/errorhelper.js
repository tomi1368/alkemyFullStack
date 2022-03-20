export const errorHelper = (msg,setError)=>{
    setError({
        msg
    })
    setTimeout(()=>{
        setError(null)
    },2000)
}