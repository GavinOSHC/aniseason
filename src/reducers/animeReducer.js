import { FETCH_ANIME, FETCH_ANIME_ERROR, REQUEST_ANIME } from "../actions";

export default (state = { anime: [], loading: true, error: false }, action) => {
	switch (action.type) {
		case FETCH_ANIME:
			return {
				...state,
				anime: action.payload,
				loading: false,
				error: false,
			};

		case FETCH_ANIME_ERROR:
			return {
				...state,
				anime: [],
				loading: false,
				error: true,
			};
		case REQUEST_ANIME:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};
