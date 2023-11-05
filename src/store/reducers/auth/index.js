import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:'Auth',
    initialState:{
      token:null,
      refresh:null,
    },
    reducers:{
        setToken: (state, action) => {
            state.token = action.payload;
          },
        setRefresh:(state,action) => {
          state.refresh = action.payload
        },
    }
})
export const {setToken,setRefresh} = AuthSlice.actions

export default AuthSlice.reducer