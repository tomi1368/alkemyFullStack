import { logoutUser } from "../../../../redux/reducers/userSlice"
export const logout = (dispatch,navigate)=>{
    dispatch(logoutUser())
    navigate("/")
}