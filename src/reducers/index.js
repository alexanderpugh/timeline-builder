import { combineReducers } from 'redux';


import timelines from './timelines.reducer';
import create from './create.reducer';
import timeline from './timeline.reducer';
import newEntry from './newEntry.reducer';

const reducer = combineReducers({
  create,
  timelines,
  timeline,
  newEntry
});

export default reducer;
