import styled from "styled-components";

export const Title = styled.h2`
	color: darkgray;
	font-size: larger;
	height: calc(100vh - 4rem);
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 768px) {
		font-size: xx-large;
	}
`;

export const NotFound = () => {
	return <Title>PAGE NOT FOUND - 404!</Title>;
};
