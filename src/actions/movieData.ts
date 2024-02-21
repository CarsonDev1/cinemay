import { getApiResponse } from '@/lib/request';

export const fetchTrending = async () => {
	const data = await getApiResponse('/trending/movie/week');
	const trending = data.results;

	return trending;
};

export const fetchGenreMovies = async () => {
	try {
		const data = await getApiResponse('/genre/movie/list');
		const genres = data.genres;

		for (const genre of genres) {
			try {
				const moviesData = await getApiResponse(`/discover/movie?with_genres=${genre.id}`);
				genre.movies = moviesData.results;
			} catch (error) {
				console.error(`Error fetching movies for genre ${genre.id}:`, error);
				genre.movies = []; // Or handle the error as required
			}
		}

		return genres;
	} catch (error) {
		console.error('Error fetching genre list:', error);
		return []; // Or handle the error as required
	}
};

export const searchMovies = async (query: string) => {
	const data = await getApiResponse(`/search/movie?query=${query}`);
	const searchedMovies = data.results;

	return searchedMovies;
};

export const fetchMovieDetails = async (id: number) => {
	const movieDetails = await getApiResponse(`/movie/${id}?append_to_response=videos`);

	return movieDetails;
};
