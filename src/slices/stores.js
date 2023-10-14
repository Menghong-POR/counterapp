import { legacy_createStore as createStore} from 'redux';
import { countReducer } from '../slices/slices'


export const stores = createStore(countReducer);

