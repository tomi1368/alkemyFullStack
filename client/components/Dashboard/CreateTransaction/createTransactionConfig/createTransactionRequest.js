import { createTransaction } from "../../../../redux/reducers/userSlice"


export const createTransactionRequest = (dispatch,value,selectUser)=>{
    let token  = selectUser.token
    dispatch(createTransaction({value,token}))
   
}