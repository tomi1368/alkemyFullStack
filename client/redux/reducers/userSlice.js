import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    "user/getUser",
    async (dispatch,ApiThunk)=>{
        try{
           const response = await axios.post("https://alkemy-dashboard.herokuapp.com/api/user/login",dispatch)
           return response.data
        }catch(error){
            return ApiThunk.rejectWithValue(error.response.data.message)
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
                    url:"https://alkemy-dashboard.herokuapp.com/api/transaction/",
                    data:dispatch.value,
                    headers:{
                      Authorization: `Bearer ${dispatch.token || " "}`
                    }
                  }              
                )
            return response.data
        } catch (error) {
            return ApiThunk.rejectWithValue(error.message)
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
                    url:"https://alkemy-dashboard.herokuapp.com/api/transaction/",
                    data:{id:dispatch.id,value:dispatch.value},
                    headers:{
                      Authorization: `Bearer ${dispatch.token || " "}`
                    }
                  }              
                )
            return response.data
        } catch (error) {
            return ApiThunk.rejectWithValue(error.message)
        }
    }
)



export const deleteTransaction = createAsyncThunk(
    "user/deleteTransaction",
    async(dispatch,ApiThunk)=>{
        try {
            const response = await axios(
                {
                    method:"DELETE",
                    url:"https://alkemy-dashboard.herokuapp.com/transaction/",
                    data:{id:dispatch.id},
                    headers:{
                      Authorization: `Bearer ${dispatch.token || ""}`
                    }
                  }              
                )
            return response.data
        } catch (error) {
            return ApiThunk.rejectWithValue(error.message)
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
    reducers:{
        logoutUser:(state)=>{
            state.currentUser=null
        }
    },
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
            state.currentUser.user.wallet.balance = action.payload.wallet.balance
            state.currentUser.user.wallet.transactions = [...state.currentUser.user.wallet.transactions,action.payload.transaction]
        },
        [createTransaction.rejected]: (state) => {
            state.error = true
        },
        [deleteTransaction.fulfilled]: (state,action)=>{
            state.currentUser.user.wallet.transactions  = state.currentUser.user.wallet.transactions.filter(elem=> elem._id != action.payload.transaction._id)
            state.currentUser.user.wallet.balance = action.payload.wallet.balance
            state.error = false
        },
        [deleteTransaction.rejected]: (state)=>{
            state.error = true
        },
        [editTransaction.fulfilled]: (state,action)=>{
            state.error = false
            state.currentUser.user.wallet.transactions = state.currentUser.user.wallet.transactions.map(el=> el._id == action.payload.transaction._id ? action.payload.transaction : el )
            state.currentUser.user.wallet.balance = action.payload.wallet.balance
        }
    }
})


export const {logoutUser} = userSlide.actions
export default userSlide.reducer