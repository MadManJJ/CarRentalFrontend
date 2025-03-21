import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    carItems: ReservationItem[]
}

const initialState:CartState = { carItems: [] }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            state.carItems.push(action.payload)
            console.log("addBooking");
            console.log(action.payload);
            console.log(state.carItems[0]);
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>) => {
            const remainItem = state.carItems.filter(obj => {
                return ( (obj.carModel !== action.payload.carModel) ||
                         (obj.pickupDate !== action.payload.pickupDate) ||
                         (obj.returnDate !== action.payload.returnDate) )
                })
            state.carItems = remainItem
        }
    }
});

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer