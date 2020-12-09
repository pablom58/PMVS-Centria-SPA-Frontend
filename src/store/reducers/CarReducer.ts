import CardTypes from '../types/CarTypes'
import { ProductReducerInterface } from '../interfaces'

const INITIAL_STATE : ProductReducerInterface = {
    products: []
}

export default (state = INITIAL_STATE,action : any) => {
    switch(action.type){
        case CardTypes.ADD_TO_CAR:
            let verify = state.products.filter(product => product._id === action.payload._id)

            let newState = []

            if(verify.length > 0){
                newState = state.products.map(product => {
                    
                    if(product._id === action.payload._id)
                        return {
                            ...product,
                            amount: product.amount + action.payload.amount
                        }

                    return product
                })
            }else{  
                newState = [...state.products,action.payload]
            }    

            return {
                products: newState
            }
        case CardTypes.REMOVE_FROM_CAR:
            return {
                products: [...state.products.filter(product => product._id !== action.payload)]
            }
        case CardTypes.EMPTY_CAR:
            return INITIAL_STATE
        default:
            return INITIAL_STATE
    }
}