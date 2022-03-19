import { editTransaction,deleteTransaction } from "../../../../redux/reducers/userSlice"

export const removeTransaction = (dispatch,navigate,id,token)=>{
 console.log({id,token})
  dispatch(deleteTransaction({id,token}))
 .unwrap()
 .then(res=> navigate("/dashboard"))
 .catch(err =>console.log(err))
}


export const changeTransaction = (dispatch,value,id,token,oldAmount,navigate)=>{
    dispatch(editTransaction({value:{...value,oldAmount},id,token}))
    .unwrap()
    .then(res=> navigate("/dashboard"))
    .catch(err =>console.log(err))
}