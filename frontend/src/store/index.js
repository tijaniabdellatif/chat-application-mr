import {createStore,compose,combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
    auth:authReducer        
});

const middleware = [thunkMiddleware];
const store = createStore(rootReducer,compose(

    applyMiddleware(...middleware),
    
     
));

export default store;
