import { editTransaction,deleteTransaction } from "../../../../redux/reducers/userSlice"
import { errorHelper } from "../../../helper/errorhelper"
export const removeTransaction = (dispatch,navigate,id,token,setError)=>{
 
  dispatch(deleteTransaction({id,token}))
 .unwrap()
 .then(res=> navigate("/dashboard"))
 .catch(err => errorHelper(err,setError))
}


export const changeTransaction = (dispatch,value,id,token,oldAmount,navigate,setError)=>{
    dispatch(editTransaction({value:{...value,oldAmount},id,token}))
    .unwrap()
    .then(res=> navigate("/dashboard"))
    .catch(err =>errorHelper(err,setError))
}