import styled from "styled-components";
import { useMovies } from "../features/context";

const Container = styled.section``;

export const MovieList = () => {
	const { isLoading, movies } = useMovies();

	if (isLoading) return <h3>Loading...</h3>;

	return (
		<Container>
			{movies?.map((movie) => (
				<h2 key={movie.imdbID}>{movie.Title}</h2>
			))}
		</Container>
	);
};
