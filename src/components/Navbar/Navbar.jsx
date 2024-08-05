import { Header, Logo } from "./navbar.css";
import { SearchBar } from "..";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<Header>
			<Logo>
				<Link to="/">MovieLab</Link>
			</Logo>
			<SearchBar />
		</Header>
	);
};
