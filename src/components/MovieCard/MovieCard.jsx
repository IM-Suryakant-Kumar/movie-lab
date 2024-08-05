import PropTypes from "prop-types";
import { Container, Image, Info, SubTitle, Title } from "./movieCard.css";
import { useState } from "react";
import { MovieDetailsModal } from "..";

export const MovieCard = ({ movie }) => {
	const [movieDetails, setMovieDetails] = useState(null);

	// enviroment
	const apikey = import.meta.env.VITE_API_KEY;

	const handleMovieDetails = async () => {
		const res = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${movie.imdbID}`);
		const movieDetais = await res.json();
		setMovieDetails(movieDetais);
	};

	// console.log(movieDetails);

	return (
		<Container onClick={handleMovieDetails}>
			<Image src={movie.Poster} alt="Poster" />
			<Info>
				<Title>{movie.Title}</Title>
				<SubTitle>
					{movie.Type} - {movie.Year}
				</SubTitle>
			</Info>
			{/* open modal on movie click */}
			{movieDetails && (
				<MovieDetailsModal movieDetails={movieDetails} setMovieDetails={setMovieDetails} />
			)}
		</Container>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.object,
};
