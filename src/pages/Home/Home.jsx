import { MovieList } from "../../components";
import { useMovies } from "../../features/context";
import { Next, PageNumber, Pagination, Prev } from "./home.css";

export const Home = () => {
	const { movies, page, setPage, totalPage } = useMovies();

	const handlePage = (type) => {
		if (type === "prev" && page > 1) {
			setPage((prevPage) => prevPage - 1);
		} else if (type === "next" && page < totalPage) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	return (
		<main>
			<MovieList />
			{/* pagination */}

			{/* Only show the pagination if we have movies */}
			{movies?.length && (
				<Pagination>
					<Prev onClick={() => handlePage("prev")}>Prev</Prev>
					<PageNumber>{page}</PageNumber>
					<Next onClick={() => handlePage("next")}>Next</Next>
				</Pagination>
			)}
		</main>
	);
};
