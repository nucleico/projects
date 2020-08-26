import {
  GET_CHARACTER,
  CLEAN_CHARACTER,
  GET_COMIC,
  CLEAN_COMICS,
  TOGGLE_FAVLIST,
  TOGGLE_FAVCH,
  TOGGLE_THEME,
  SET_LOADING,
  ADD_CURRENT,
  CLEAR_CURRENT,
  ADD_COMMENT,
  GET_COMMENTS,
} from '../actions/types';

const initialState = {
  personajeData: [],
  current: {},
  comments: [],
  comicData: [],
  favsData: [],
  favList: [],
  comicListToggle: false,
  favComponentToggle: false,
  commentModalToggle: false,
  isLightTheme: true,
  loading: false,
  themes: {
    light: {
      navBack: '#f7f5f4',
      back: 'white',
      comicBack: 'whitesmoke',
      letter: 'black',
    },
    dark: {
      navBack: '#756f6b',
      back: '#44413e',
      comicBack: '#756f6b',
      letter: 'white',
      weight: '400',
      shadowElement: 'rgb(201, 0, 0)',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        personajeData: action.payload,
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
        loading: false,
      };
    case CLEAN_COMICS:
      return {
        ...state,
        comicData: [],
        comicListToggle: false,
      };
    case TOGGLE_FAVLIST:
      return {
        ...state,
        favComponentToggle: !state.favComponentToggle,
      };

    case TOGGLE_FAVCH:
      if (!state.favList.includes(action.payload.id)) {
        return {
          ...state,
          favsData: [...state.favsData, action.payload],
          favList: [...state.favList, action.payload.id],
        };
      } else {
        return {
          ...state,
          favsData: state.favsData.filter(
            (fav) => fav.id !== action.payload.id
          ),
          favList: state.favList.filter((fav) => fav !== action.payload.id),
        };
      }
    case ADD_CURRENT:
      return {
        ...state,
        current: action.payload,
        commentModalToggle: !state.commentModalToggle,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: '',
        comments: [],
        commentModalToggle: !state.commentModalToggle,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case TOGGLE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
