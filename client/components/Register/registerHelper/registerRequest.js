import axios from "axios"

export const registerRequest = async (navigate,value)=>{
    try {
        let registedUser = await axios.post("http://localhost:4500/api/user/register",value)
        navigate("/login")
    } catch (error) {
        console.log(error.message)
    }
}