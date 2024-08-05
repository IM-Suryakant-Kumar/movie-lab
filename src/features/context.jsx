import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext(null);

export const MainProvider = ({ children }) => {
	const [movies, setMovies] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [searchText, setSearchText] = useState("new");
	const [page, setPage] = useState(1);

  // enviroment
	const apikey = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		// initial state
		setIsLoading(true);

		fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${searchText}&page=${page}`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.Search);
				// final state after success
				setIsLoading(false);
			})
			.catch((err) => {
				// final state after rejected
				setIsLoading(false);
				console.log(err);
			});
	}, [page, searchText, apikey]);

	return (
		<MovieContext.Provider value={{ isLoading, movies, setSearchText, setPage }}>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovies = () => useContext(MovieContext);
export default MainProvider;

MainProvider.propTypes = {
	children: PropTypes.node,
};
