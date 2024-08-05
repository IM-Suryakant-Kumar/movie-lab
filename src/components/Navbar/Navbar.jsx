import { Header, Logo } from "./navbar.css";
import { SearchBar } from "..";

export const Navbar = () => {
	return (
		<Header>
			<Logo>MovieLab</Logo>
			<SearchBar />
		</Header>
	);
};
