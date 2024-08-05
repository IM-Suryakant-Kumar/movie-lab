import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10;
	margin: auto;
	background-color: #33333370;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	width: 95%;
	max-width: 35rem;
	background-color: var(--color-primary);
	border-radius: 0.25em;
	position: relative;

	display: flex;
  justify-content: center;
  align-items: center;
	flex-direction: column;
	gap: 1em;
	padding: 1em;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const CloseButton = styled.button`
	width: 2rem;
	height: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	font-family: sans-serif;
	font-size: x-large;
	background-color: #fff;
	color: #f00;
	border-top-right-radius: 0.2em;

	&:hover {
		background-color: #f00;
		color: #fff;
	}
`;

export const Image = styled.img`
	height: 15rem;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`;
export const Info = styled.div`
	margin-right: 2em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  gap: 0.5em;
  
  @media screen and (min-width: 768px) {
    gap: 1em;
  }
`;

export const Title = styled.h2``;
export const Duration = styled.p``;
export const Plot = styled.p``;
export const Awards = styled.p``;
export const Cast = styled.p``;
export const BoxOffice = styled.p``;
