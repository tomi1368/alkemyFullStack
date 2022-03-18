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


export const createTransaction = createAsyncThunk(
    "user/addTransaction",
    async(dispatch,ApiThunk)=>{
        try {
            const response = await axios(
                {
                    method:"POST",
                    url:"http://localhost:4500/api/transaction/create",
                    data:dispatch.value,
                    headers:{
                      Authorization: `Bearer ${dispatch.token || " "}`
                    }
                  }              
                )
                console.log(response.data)
            return response.data
        } catch (error) {
            return ApiThunk.rejectWithValue()
        }
    }
)

export const editTransaction = createAsyncThunk(
    "user/editTransaction",
    async(dispatch,ApiThunk)=>{
        try {
            const response = await axios(
                {
                    method:"PUT",
                    url:"http://localhost:4500/api/transaction/create",
                    data:dispatch.value,
                    headers:{
                      Authorization: `Bearer ${dispatch.token || " "}`
                    }
                  }              
                )
                console.log(response.data)
            return response.data
        } catch (error) {
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
        },
        [fetchUser.rejected] : (state)=>{
            state.error = true
        },
        [createTransaction.pending]: (state)=> {
            state.error=false
        },
        [createTransaction.fulfilled]: (state,action)=>{
            state.error = false
            console.log(action)
            state.currentUser.user.wallet.balance = action.payload.wallet.balance
            state.currentUser.user.wallet.transactions = [...state.currentUser.user.wallet.transactions,action.payload.transaction]
        },
        [createTransaction.rejected]: (state) => {
            state.error = true
        }
    }
})



export default userSlide.reducer