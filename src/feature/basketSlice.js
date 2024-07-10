import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../data";

let initialState = {
    products: storeData,
    amount : 0,
    total:0,
}

const basketSlice = createSlice({
    name : 'basket',
    initialState, 
    reducers: {
        increaseAmount : (state, {payload}) => {

           const item = state.products.find((item) => item.name == payload.name)
           item.amount++
        },
        decreaseAmount : (state, {payload}) => {

           const item = state.products.find((item) => item.name == payload.name)
           item.amount--
        },
        removeProduct : (state, {payload}) => {

            state.products=  state.products.filter((item ) => item.name !== payload.name)
        },
        updateTotal : (state) => {
            let total =0
            let amount = 0
            state.products.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    }
})
export const {increaseAmount, decreaseAmount, removeProduct, updateTotal} =  basketSlice.actions

export default basketSlice.reducer