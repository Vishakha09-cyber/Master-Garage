import {Periodic,specialservice}from '../Components/PeriodicServices/Periodic'
const initialState={
    totalAmount:0,
    totalCount:0,
    Cart1:Periodic,
    Cart2:specialservice
}

const cartReducer=(state=initialState,action)=>{
   switch (action.type){

    
       default:
           return state;
   }
}

export default cartReducer;