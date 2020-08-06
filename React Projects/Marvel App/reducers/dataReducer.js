import { GET_CHARACTER, CLEAN_CHARACTER, GET_COMIC, CLEAN_COMICS, TOGGLE_FAVLIST, ADD_FAV, REMOVE_FAV } from '../actions/types';

const initialState = {
  personajeData: [],
  comicData: [],
  favsData: [],  
  comicListToggle: false,  
  favListToggle: false  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        personajeData: action.payload
      };
    case CLEAN_CHARACTER:
      return {
        ...state,
        personajeData: [],        
      };
    case GET_COMIC:
      return {
        ...state,
        comicData: action.payload,
        comicListToggle: true,
      };
     case CLEAN_COMICS:
       return {
         ...state,                 
         comicData: [],
         comicListToggle: false, 
       } 
     case TOGGLE_FAVLIST:
       return {
         ...state,
         favListToggle: !state.favListToggle
       }  
     case ADD_FAV:
       return {
         ...state,
         favsData: [...state.favsData, action.payload]         
       } 
     case REMOVE_FAV:
       return {
         ...state,
         favsData: state.favsData.filter(fav => fav.id !== action.payload.id),
       } 
    default:
      return state;
  }
};
