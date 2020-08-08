import {
  GET_CHARACTER,
  GET_COMIC,
  TOGGLE_FAVLIST,
  ADD_FAV,
  REMOVE_FAV,
  CLEAN_CHARACTER,
  CLEAN_COMICS,
  TOGGLE_THEME,
  SET_LOADING,
} from './types';
import axios from 'axios';

export const getCharacter = (query) => async (dispatch) => {
  if (query) {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
      );
      const data = response.data.data.results;

      dispatch({
        type: GET_CHARACTER,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch({
      type: CLEAN_CHARACTER,
    });
  }
};

export const getComics = (personajeId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${personajeId}/comics?ts=1&limit=50&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
    );

    const data = response.data.data.results;

    dispatch({
      type: GET_COMIC,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const cleanComicData = () => {
  return {
    type: CLEAN_COMICS,
  };
};

export const addFavList = (ch, im, id) => {
  const data = {
    ch,
    im,
    id,
  };
  return {
    type: ADD_FAV,
    payload: data,
  };
};

export const removeFavList = (ch, im, id) => {
  const data = {
    ch,
    im,
    id,
  };

  return {
    type: REMOVE_FAV,
    payload: data,
  };
};

export const favListToggle = () => {
  return {
    type: TOGGLE_FAVLIST,
  };
};

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
