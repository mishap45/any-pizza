import { InferActionsTypes } from '../Redux'

export type orderPizza = {
    id: number
    imgPizza: string
    namePizza: string
    size: string
    price: number
}

type initialStateType = {
    Pizza: Array<orderPizza>
}

let initialState: initialStateType = {
    Pizza: []
};

const CartReducer = (state = initialState, action: ActionsTypesCart): initialStateType => {
    switch (action.type) {
        case 'SET_CART': {
            return {
                ...state,
                Pizza: [...state.Pizza, {id: action.id, imgPizza: action.imgPizza, namePizza: action.namePizza,
                        size: action.size, price: action.price,}
                ]
            }
        }

        case 'DELETE_ALL': {
            return {
                ...state,
                Pizza: []
            }
        }

        case 'DELETE_ONE': {
            return {
                ...state,
                Pizza: state.Pizza.filter(p => p.id !== action.idDelete)
            }
        }

        default: return state
    }
};

type ActionsTypesCart = InferActionsTypes<typeof actionsCart>

export const actionsCart = {
    setCart: (
        id: number,
        imgPizza: string,
        namePizza: string,
        size: string,
        price: number
    ) => ({
        type: 'SET_CART',
        id,
        imgPizza,
        namePizza,
        size,
        price,

    } as const),
    deleteAll: () => ({type: 'DELETE_ALL'} as const),
    deleteOne: (idDelete: number) => ({type: 'DELETE_ONE', idDelete} as const)
};

export default CartReducer