import {
  GET_CHARACTERS,
  NEXT_URL,
  BACKDROP_STATE,
  GET_ONE_PERSON,
  GET_FILTER_LIST,
} from "../../constatnts/actionConstatnts";
import { getData } from "../../../util/network";

export function getCaractersList(data) {
  return { type: GET_CHARACTERS, data };
}

export function nextUrlCaracters(url) {
  return { type: NEXT_URL, url };
}

export function changeBackdropState(state) {
  return { type: BACKDROP_STATE, state };
}

export function getOnePerson(data) {
  return { type: GET_ONE_PERSON, data };
}
export function getFilterList(data) {
  return { type: GET_FILTER_LIST, data };
}

export function getDataFunk(url) {
  return async (dispatch) => {
    const data = await getData(url);
    if (data.data.results) {
      dispatch(getCaractersList(data.data));
    } else {
      dispatch(getOnePerson(data.data));
    }
  };
}
export function getFilterDataFunk(url) {
  return async (dispatch) => {
    const data = await getData(url);
    dispatch(getFilterList(data.data));
  };
}
