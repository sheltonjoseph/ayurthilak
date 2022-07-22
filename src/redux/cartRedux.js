import{createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        products:[],
        quantity:0,
        total:0, 
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1; // this is cart quantity
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity // this is the quantity of single product
        }
    }
})

export const { addProduct }  = cartSlice.actions
export default cartSlice.reducer;