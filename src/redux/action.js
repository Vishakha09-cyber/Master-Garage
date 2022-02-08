import  * as actionType from "./actionType";

export const addToCart=(itemID)=>{
    return{
        type:actionType.ADD_CAR,
        payload:{
            id:itemID
        }
    }      
}

export const removeFromCart=(itemID)=>{
    return{
            type:actionType.REMOVE_FROM_CART,
            payload:{
                id:itemID
            }
        }
}

export const adjustQty=()=>{

}