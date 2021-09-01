import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import characterReduser from "./redusers/rootRedusers"
import episodesReduser from "./redusers/episodesReduser"
import pageNameReduser from "./redusers/pageNameReduser"
const redusers =combineReducers({
    characterReduser:characterReduser,
    episodesReduser:episodesReduser,
    pageNameReduser:pageNameReduser
})
const store =createStore(redusers,applyMiddleware(thunk))
export default store;