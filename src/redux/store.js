import  {createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import AnimeReducer from './anime.reducer';

const actions = [];

if(process.env.NODE_ENV === 'development') {
    actions.push(logger);
}

export default createStore(AnimeReducer, applyMiddleware(...actions));