import {
  GET_DATA,
  ADD_PLAYER,
  ADD_SHOT,
  DELETE_PLAYER,
  DELETE_SHOT,
  TOGGLE_STATS,
  SET_CURRENT_PLAYER,
} from '../actions/types';

const initialState = {
  shots: [],
  players: [],
  statsToggle: false,
  currentPlayerShots: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        shots: action.payload.shots,
        players: action.payload.players,
      };

    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload],
      };

    case DELETE_PLAYER:
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };

    case ADD_SHOT:
      return {
        ...state,
        shots: [action.payload, ...state.shots],
      };

    case DELETE_SHOT:
      return {
        ...state,
        shots: state.shots.filter((shot) => shot.id !== action.payload),
      };
    case TOGGLE_STATS:
      return {
        ...state,
        statsToggle: true,
      };
    case SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayerShots: state.shots.filter(
          (shot) => shot.idShooter === action.payload
        ),
      };

    default:
      return state;
  }
};
