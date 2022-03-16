import { fetchUser } from "../../../redux/reducers/userSlice"

export const validationForm = (value,dispatch,navigate)=>{
    dispatch(fetchUser(value))
    .unwrap()
    .then(res=> navigate("/dashboard") )
    .catch(err=>console.log(err))
}