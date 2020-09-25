import axios from "axios";

export const FETCH_ANIME = "FECT_ANIME";
export const FETCH_ANIME_ERROR = "FETCH_ANIME_ERROR";

const requestAnme = (anime) => {
	return {
		type: FETCH_ANIME,
		payload: anime,
	};
};

const requestAnmeError = (error) => {
	return {
		type: FETCH_ANIME_ERROR,
		payload: error,
	};
};

export const fetchAnime = (season, year) => async (dispatch) => {
	try {
		const result = await axios.post("http://localhost:3000/anime", {
			season: season,
			year: year,
		});

		dispatch(requestAnme(result.data));
	} catch (error) {
		dispatch(requestAnmeError(error));
		console.log(error);
		return;
	}
};
