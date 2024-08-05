import PropTypes from "prop-types";
import { Container, Image, Info, SubTitle, Title } from "./movieCard.css";

export const MovieCard = ({ movie }) => {
	console.log(movie);

	return (
		<Container>
			<Image src={movie.Poster} alt="Poster" />
			<Info>
				<Title>{movie.Title}</Title>
				<SubTitle>
					{movie.Type} - {movie.Year}
				</SubTitle>
			</Info>
		</Container>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.object,
};
