import { createTransaction } from "../../../../redux/reducers/userSlice"
import { errorHelper } from "../../../helper/errorhelper"

export const createTransactionRequest = (dispatch,value,selectUser,setError)=>{
    let token  = selectUser.token
    dispatch(createTransaction({value,token}))
    .unwrap()
    .catch(err=>errorHelper(err,setError))
   
}