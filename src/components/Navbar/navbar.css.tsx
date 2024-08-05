import styled from "styled-components";

export const Header = styled.header`
	height: 4rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.25em;
	background: var(--color-secondary);
`;

export const Logo = styled.h1`
	font-family: var(--font-cinzel);
	font-size: large;
	color: var(--color-logo);

	@media screen and (min-width: 768px) {
		font-size: x-large;
	}
`;
