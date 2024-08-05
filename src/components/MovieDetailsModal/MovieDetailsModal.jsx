import PropTypes from "prop-types";
import {
	Cast,
	CloseButton,
	Container,
	Duration,
	Image,
	Info,
	Plot,
	Title,
	Wrapper,
} from "./movieDetailsModal.css";

export const MovieDetailsModal = ({ movieDetails, setMovieDetails }) => {
	// console.log(movieDetails);

	const handleCloseButton = (e) => {
		// to prevent parent click event
		e.stopPropagation();

		setMovieDetails(null);
	};

	return (
		<Container>
			<Wrapper>
				<CloseButton onClick={handleCloseButton}>X</CloseButton>
				<Image src={movieDetails.Poster} alt="poster" />
				<Info>
					<Title>
						{movieDetails.Title} - {movieDetails.Year}
					</Title>
					<Duration>
						Duration - {movieDetails.Runtime} | IMDB - {movieDetails.imdbRating}
					</Duration>
					<Plot>{movieDetails.Plot}</Plot>
					<Cast>Cast: {movieDetails.Actors}</Cast>
				</Info>
			</Wrapper>
		</Container>
	);
};

MovieDetailsModal.propTypes = {
	movieDetails: PropTypes.object,
	setMovieDetails: PropTypes.func,
};
