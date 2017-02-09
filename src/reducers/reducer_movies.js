import  {FETCH_MOVIES} from '../actions/index';
import  {FETCH_MOVIE} from '../actions/index';

const INITIAL_STATE = {all: [], movie: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_MOVIES:
     return { ...state, all: action.payload.data.results};
     case FETCH_MOVIE:
     return {...state, movie: action.payload.data};
  }

  return state;

}
