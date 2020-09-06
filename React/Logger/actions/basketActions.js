import {
  ADD_PLAYER,
  ADD_SHOT,
  DELETE_PLAYER,
  DELETE_SHOT,
  GET_DATA,
  TOGGLE_STATS,
  SET_CURRENT_PLAYER,
  SET_LOADING,
} from './types';

import { db } from '../firebase';

// Get players from database

export const getData = () => async (dispatch) => {
  const players = [];
  let shots = [];

  const querySnapshotPlayers = await db.collection('players').get();

  querySnapshotPlayers.forEach((player) => {
    players.push({ ...player.data(), id: player.id });
  });

  const querySnapshotShots = await db.collection('shots').get();

  querySnapshotShots.forEach((shot) => {
    shots.push({ ...shot.data(), id: shot.id });
  });

  dispatch({
    type: GET_DATA,
    payload: { players, shots },
  });
};

// Add Player

export const addPlayer = (player) => async (dispatch) => {
  await db.collection('players').doc().set(player);

  dispatch({
    type: ADD_PLAYER,
    payload: player,
  });
  dispatch(getData());
};

// Delete player

export const deletePlayer = (id) => async (dispatch) => {
  await db.collection('players').doc(id).delete();
  dispatch({
    type: DELETE_PLAYER,
    payload: id,
  });
};

// Add Shot

export const addShot = (shot) => async (dispatch) => {
  await db.collection('shots').doc().set(shot);

  dispatch({
    type: ADD_SHOT,
    payload: shot,
  });
  dispatch(getData());  
};

// Delete Shot

export const deleteShot = (id) => async (dispatch) => {
  db.collection('shots').doc(id).delete();

  dispatch({
    type: DELETE_SHOT,
    payload: id,
  });  
};

export const setStatsToggle = () => {
  return {
    type: TOGGLE_STATS,
  };
};

export const setCurrentPlayer = (id) => {
  return {
    type: SET_CURRENT_PLAYER,
    payload: id,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
