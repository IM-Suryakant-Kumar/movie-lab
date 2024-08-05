import styled from "styled-components";

export const Container = styled.div`
	width: 60%;
	max-width: 30rem;
	height: 2rem;
	display: flex;
	align-items: center;
	background: #f1f2f6;
	border-radius: 0.25em;

	@media screen and (min-width: 768px) {
		height: 2.5rem;
	}
`;

export const Input = styled.input.attrs({
  type: "text",
})`
	margin: 1em;
	width: calc(100% - 1.5rem);
	outline: none;
	border: none;
	background: #f1f2f6;
`;

export const SearchIcon = styled.img.attrs({
	src: "https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=ebf2fa",
	alt: "search icon",
})`
	height: 2rem;
  padding: 0.25em;
	background: var(--color-logo);
  color: var(--color-primary);
	display: flex;
	justify-content: center;
	align-items: center;
  border-radius: 0 0.25em 0.25em 0;

  @media screen and (min-width: 768px) {
		height: 2.5rem;
	}
`;
