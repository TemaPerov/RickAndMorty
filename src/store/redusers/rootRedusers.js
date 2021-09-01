 import {GET_CHARACTERS,NEXT_URL,BACKDROP_STATE,GET_ONE_PERSON,GET_FILTER_LIST} from '../constatnts/actionConstatnts'
 import {character_url} from "../../util/api"
const initialState ={
    characterList: [],
    filterCharacterList:[],
    nextUrl: character_url,
    backdropSate: false,
    onePerson:[]
}
const  characterReduser = (state = initialState,action)=>{
    switch (action.type) {
        case GET_CHARACTERS:
                return{
                    ...state,
                    characterList: action.data,
                    filterCharacterList: action.data
                }
        case NEXT_URL:
                return{
                    ...state,
                    nextUrl: action.url
                }
        case BACKDROP_STATE:
                return{
                    ...state,
                    backdropSate: action.state
                }
        case GET_ONE_PERSON:
                return{
                    ...state,
                    onePerson: action.data
                }
        case GET_FILTER_LIST:
                return{
                    ...state,
                    filterCharacterList: action.data
                }
        default:
            return state

    }
}

export default characterReduser;