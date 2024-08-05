import styled from "styled-components";

export const Container = styled.div`
	border: 4px solid var(--color-logo);
	border-radius: 0.5em;
	position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
  min-height: 23rem;
`;

export const Info = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 5rem;
	background-color: var(--color-logo);
	color: var(--color-primary);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const Title = styled.h2`
	font-size: medium;
	font-family: var(--font-cinzel);
`;

export const SubTitle = styled.p`
	font-size: smaller;
  font-weight: bold;
	font-family: var(--font-cinzel);
`;
