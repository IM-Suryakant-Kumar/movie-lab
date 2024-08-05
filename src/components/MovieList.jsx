import styled from "styled-components";
import { useMovies } from "../features/context";
import { MovieCard } from ".";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1em;
  padding: 1em;
`;

export const MovieList = () => {
	const { isLoading, movies } = useMovies();

	if (isLoading) return <h3>Loading...</h3>;

	return (
		<Container>
			{movies?.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} />
			))}
		</Container>
	);
};
