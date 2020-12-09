import CarTypes from '../types/CarTypes'

import { ProductInterface } from '../interfaces'

export const addToCar = ( data : ProductInterface ) => (dispatch : any) => {
    dispatch({
        type: CarTypes.ADD_TO_CAR,
        payload: data
    })
}

export const removeFromCar = ( data : string ) => (dispatch: any) => {
    dispatch({
        type: CarTypes.REMOVE_FROM_CAR,
        payload: data
    })
}

export const emptyCar = () => (dispatch: any) => {
    dispatch({
        type: CarTypes.EMPTY_CAR
    })
}