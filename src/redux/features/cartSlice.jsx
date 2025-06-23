import {createSlice} from "@reduxjs/toolkit"

const initialState ={
  carts:[]
}

const cartSlice = createSlice({
  name:"cartslice",
  initialState,
  reducers:{

    // add to cart
    addToCart:(state,action)=>{

      const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

      if(IteamIndex >= 0) {
        state.carts[IteamIndex].qnty +=1;
      }else{
        const temp = {...action.payload,qnty:1}
        state.carts = [...state.carts,temp];
      }
    },

    // remove particular iteam
    removeToCart:(state,action)=>{
      const data=state.carts.filter((e)=>e.id!==action.payload);
      state.carts = data
    },

    // decrement
    decrement:(state,action) =>{
      const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload);

      state.carts[IteamIndex].qnty -=1;

      const data = state.carts.filter((e)=>e.qnty!==0);
      state.carts=data;
    },

    // remove all cart
    removeAllCart:(state,action) =>{
      state.carts=[];
    }
  }
});

export const {addToCart , removeToCart ,decrement ,removeAllCart} = cartSlice.actions;

export default cartSlice.reducer;