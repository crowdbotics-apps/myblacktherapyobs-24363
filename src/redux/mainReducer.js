import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard111218541Reducer from '../features/Dashboard111218541/redux/reducers'
import Dashboard122218530Reducer from '../features/Dashboard122218530/redux/reducers'
import Dashboard229218523Reducer from '../features/Dashboard229218523/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard111218541: Dashboard111218541Reducer,
Dashboard122218530: Dashboard122218530Reducer,
Dashboard229218523: Dashboard229218523Reducer,

});