import {
  GET_EPISODES,
  GET_FILTER_EPISODES,
  BACKDROP_STATE,
  GET_ONE_EPISODES,
  GET_CHARTCERS_IMG,
  REMOVE_CARACTERS_IMG
} from "../constatnts/actionConstatnts";

const initialState = {
  episodesList: [],
  filterEpisodesList: [],
  oneEpisode:[],
  backdropState: false,
  imgCharaccters: []
};

const episodesReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODES:
      return {
        ...state,
        episodesList: action.data,
        // filterEpisodesList: action.data.results,
      };
    case GET_FILTER_EPISODES:        
      return {
        ...state,
        filterEpisodesList: [...action.data],
      };
      case BACKDROP_STATE:
        return{
            ...state,
            backdropState: action.state
        }
      case GET_ONE_EPISODES:
        return{
            ...state,
            oneEpisode: action.data
        }
      case GET_CHARTCERS_IMG:
        return{
            ...state,         
            // imgCharaccters: action.data
            imgCharaccters: [...state.imgCharaccters,action.data]
        }
      case REMOVE_CARACTERS_IMG:
        return{
            ...state,         
            imgCharaccters: action.data
      
        }
    default:
      return state;
  }
};

export default episodesReduser;
