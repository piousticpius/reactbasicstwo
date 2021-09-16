import {combineReducers} from 'redux'
import {productReducer,selectedProductReducer} from './productReducer'

const reducers=combineReducers({
    allProducts:productReducer,
});
export default reducers;