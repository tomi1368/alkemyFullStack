import axios from "axios"


export const validationForm = async (value,navigate)=>{
    try {
        let loginUser = await axios.post("http://localhost:4500/api/user/login",value)
        navigate("/dashboard")
    } catch (error) {
        console.log(error.message)
    }
}