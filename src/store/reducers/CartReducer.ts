import { InferActionsTypes } from '../Redux'

type orderPizza = {
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
        case 'SET_Cart': {
            return {
                ...state, Pizza: [...state.Pizza,
                    {id: action.id, imgPizza: action.imgPizza, namePizza: action.namePizza,
                        size: action.size, price: action.price,}
                ]
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
        type: 'SET_Cart',
        id,
        imgPizza,
        namePizza,
        size,
        price,

    } as const)
};

export default CartReducer