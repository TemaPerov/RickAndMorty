import {
 GET_PAGE_NAME
  } from "../../constatnts/actionConstatnts";
 
  
  export function getPageName(data) {
    return { type: GET_PAGE_NAME, data };
  }
  
