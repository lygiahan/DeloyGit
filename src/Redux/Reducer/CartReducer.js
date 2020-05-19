import { ADD_CART, REMOVE_CART } from "../../actions/type";

let initialCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];



export const CartReducer = (state = initialCart, action) => {
    switch (action.type) {

        case ADD_CART:
            {
                console.log(action.data)
                let index = state.findIndex(item => item.maKhoaHoc === action.data.maKhoaHoc);

                if (index !== -1) {} else {
                    state.push(action.data)

                }
                localStorage.setItem("cart", JSON.stringify(state))

                return [...state]
            }

        case REMOVE_CART:
            {

                let fil = state.filter(item => item.maKhoaHoc !== action.data)

                localStorage.setItem('cart', JSON.stringify(fil))
                return [...fil]


            }
        default:
            return state;
    }
}