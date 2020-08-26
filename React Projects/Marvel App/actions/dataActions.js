import {
  GET_CHARACTER,
  GET_COMIC,
  TOGGLE_FAVLIST,
  TOGGLE_FAVCH,
  CLEAN_CHARACTER,
  CLEAN_COMICS,
  TOGGLE_THEME,
  SET_LOADING,
  ADD_CURRENT,
  CLEAR_CURRENT,
  ADD_COMMENT,
  GET_COMMENTS,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

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

export const toggleFavCharacter = (ch, im, id) => {
  const data = {
    ch,
    im,
    id,
  };

  return {
    type: TOGGLE_FAVCH,
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

export const addCurrent = (data) => {
  return {
    type: ADD_CURRENT,
    payload: data,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Get Comments by Profile

export const getComments = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/comments/${id}`);

    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

// Add Comment

export const addComment = (id, commentForm, comments) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(`/api/comments/${id}`, commentForm, config);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    const resGet = await axios.get(`/api/comments/${id}`, commentForm, config);

    dispatch({
      type: GET_COMMENTS,
      payload: resGet.data,
    });

    dispatch(setAlert('Comment Added!', 'success'));
  } catch (error) {
    console.error(error);
  }
};
