import {
  GET_EPISODES,
  GET_FILTER_EPISODES,
  BACKDROP_STATE,
  GET_ONE_EPISODES,
  GET_CHARTCERS_IMG,
  REMOVE_CARACTERS_IMG
} from "../../constatnts/actionConstatnts";
import { getData } from "../../../util/network";

export function getEpisodesList(data) {
  return { type: GET_EPISODES, data };
}

export function changeBackdropEpisodes(state) {
  return { type: BACKDROP_STATE, state };
}

export function getFilterListEpisodes(data) {
  return { type: GET_FILTER_EPISODES, data };
}
export function getOneEpisodes(data) {

  return { type: GET_ONE_EPISODES, data };
}
export function removeCharactersImgAction(data) {
 
  return { type: REMOVE_CARACTERS_IMG, data };
}
export function getCharctersImgAction(data) {

  return { type: GET_CHARTCERS_IMG, data };
}

export function getCharctersImg(url) {
  return async (dispatch) => {
    const data = await getData(url);
      dispatch(getCharctersImgAction(data.data));   
  };
}


export function getDataFunkEpisodes(url) {
  return async (dispatch) => {
    const data = await getData(url);
    if (data.data.results) {
      dispatch(getEpisodesList(data.data)); 
      dispatch(getFilterListEpisodes(data.data.results)); 
      
    }else{
      dispatch(getOneEpisodes(data.data));
    }
  };
}



export function getFilterDataFunk(url) {
  return async (dispatch) => {
    const data = await getData(url);
    dispatch(getFilterListEpisodes(data.data));
  };
}