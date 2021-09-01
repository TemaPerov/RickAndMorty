import {GET_PAGE_NAME} from '../constatnts/actionConstatnts'

const initialState ={
        pageName: 0
}
const  pageNameReduser = (state = initialState,action)=>{
   switch (action.type) {
       case GET_PAGE_NAME:
               return{
                   ...state,
                   pageName: action.data,
                
               }
   
       default:
           return state

   }
}

export default pageNameReduser;