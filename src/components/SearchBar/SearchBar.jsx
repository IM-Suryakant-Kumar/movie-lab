import { debounce } from "../../debounce";
import { useMovies } from "../../features/context";
import { Container, Input, SearchIcon } from "./searchBar.css";

export const SearchBar = () => {
	const { setSearchText, setPage } = useMovies();

	const handleSearch = (e) => {
		setSearchText(e.target.value);
		setPage(1);
	};
	const debounceChangeHandler = debounce(handleSearch, 500);

	return (
		<Container>
			<Input onChange={debounceChangeHandler} />
			<SearchIcon />
		</Container>
	);
};
