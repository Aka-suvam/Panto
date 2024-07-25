import { createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        /*addItem:(state,action)=>{
         state.items.push(action.payload);*/
        addItem: (state, action) => {
            const newItem = action.payload;
           
            const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);
      
            if (existingItemIndex !== -1) {
              
              if (newItem.quantity <= 0) { // If the new quantity is 0 or less, remove the item from the cart
                state.items.splice(existingItemIndex, 1);
              } else {// If the item already exists, update the quantity
                state.items[existingItemIndex].quantity = newItem.quantity;
                toast.success(`Cart update`,{position:"top-center",theme:"colored"});

            
            
              }
            } else {
              // If the item doesn't exist and the quantity is greater than 0, add it to the cart
              if (newItem.quantity > 0) {
                state.items.push(newItem);
                toast.success(`${newItem.description}  added to  your cart`,{position:"top-right", theme:"colored"});

              }
            }
          },
       
        removeItem: (state, action) => {
         
          const newItem = action.payload;
          const itemIndex = state.items.findIndex((item) => item.id === newItem.id);
         

          if (itemIndex !== -1) {
            state.items.splice(itemIndex, 1);
            //const itemName= state.items[itemIndex];
            console.log(newItem.description);
            toast.error(` ${newItem.description} removed from cart`,{position:"top-right",theme:"colored"});

          }
        },
        clearCart:(state)=>{
           // state.items.length=0;
           state.items = [];
           toast.success(`Cart is cleared`,{position:"bottom-right",theme:"colored"});

        }
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
