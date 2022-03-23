import axios from "axios"
import { errorHelper } from "../../helper/errorhelper"

export const registerRequest = async (navigate,value,setError)=>{
    try {
        let registedUser = await axios.post("https://alkemy-dashboard.herokuapp.com/api/user/register",value)
        navigate("/login")
    } catch (error) {
        errorHelper("Usuario ya existente | Server error",setError)
    }
}