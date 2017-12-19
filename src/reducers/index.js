import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import loginReducer from './Login';
import baseCitiesSelectData from '../components/Common/BaseCitiesSelect/reducers';


const rootReducer = combineReducers({
	routing: routerReducer,
	loginReducer,
	baseCitiesSelectData
});

export default rootReducer;
