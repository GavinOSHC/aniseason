import { FETCH_ANIME, FECT_ANIME_ERROR } from "../actions";

export default (state = { anime: [], loading: true, error: false }) => {
  switch (action.type) {
    case FETCH_ANIME:
      return {
        ...state,
        anime: action.payload,
        loading: false,
        error: false,
      };

    case FECT_ANIME_ERROR:
      return {
        ...state,
        anime: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
