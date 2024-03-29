import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../../constants/productConstants'
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false, products: action.data,
            }
        case PRODUCT_LIST_FAILURE:
            return {
                loading: false, error: action.data,
            }
        default:
            return state
    }
}


