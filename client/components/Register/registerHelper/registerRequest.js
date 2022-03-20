import axios from "axios"
import { errorHelper } from "../../helper/errorhelper"

export const registerRequest = async (navigate,value,setError)=>{
    try {
        let registedUser = await axios.post("http://localhost:4500/api/user/register",value)
        navigate("/login")
    } catch (error) {
        errorHelper(error.response.data.message,setError)
    }
}