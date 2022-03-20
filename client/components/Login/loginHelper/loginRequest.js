import { fetchUser } from "../../../redux/reducers/userSlice"
import { errorHelper } from "../../helper/errorhelper"

export const validationForm = (value,dispatch,navigate,setError)=>{
    dispatch(fetchUser(value))
    .unwrap()
    .then(res=> navigate("/dashboard") )
    .catch(err=>errorHelper(err,setError))
}