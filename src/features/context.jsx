import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext(null);

export const MainProvider = ({ children }) => {
	const [moviesData, setMoviesData] = useState({ Search: null, totalResults: 0 });
	const [isLoading, setIsLoading] = useState(false);
	const [searchText, setSearchText] = useState("new");
	const [page, setPage] = useState(1);

  console.log(searchText)

	// calculate total page
	let totalPage = moviesData?.totalResults / 10;
	if (moviesData?.totalResults % 10) {
		totalPage++;
	}

	// enviroment
	const apikey = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		// initial state
		setIsLoading(true);

		fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${searchText}&page=${page}`)
			.then((res) => res.json())
			.then((data) => {
				setMoviesData(data);
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
		<MovieContext.Provider
			value={{ isLoading, movies: moviesData.Search, setSearchText, page, setPage, totalPage }}
		>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovies = () => useContext(MovieContext);
export default MainProvider;

MainProvider.propTypes = {
	children: PropTypes.node,
};
