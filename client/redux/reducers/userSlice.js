import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    "user/getUser",
    async (dispatch,ApiThunk)=>{
        try{
           const response = await axios.post("http://localhost:4500/api/user/login",dispatch)
           return response.data
        }catch(err){
            return ApiThunk.rejectWithValue()
        }
            
    }
)

const initialValue = {
    currentUser: null,
    isFetching: false,
    error: false,
}

const userSlide = createSlice({
    name:"user",
    initialState:initialValue,
    extraReducers:{
        [fetchUser.pending] : (state)=>{
            state.isFetching = true
            state.error = false
        },
        [fetchUser.fulfilled] : (state,action)=>{
            state.isFetching = false
            state.error = false
            state.currentUser = action.payload
            console.log(action.payload)
        },
        [fetchUser.rejected] : (state)=>{
            state.error = true
        }
    }
})

export default userSlide.reducer