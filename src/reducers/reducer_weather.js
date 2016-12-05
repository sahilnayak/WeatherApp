import {Fetch_Weather} from '../actions/index';

export default function(state = [], action) {
    console.log('Actionzzzz', action)
    switch(action.type){
    case 'FETCH_WEATHER':
        return [action.payload.data, ...state];
    }
    return state;

} 