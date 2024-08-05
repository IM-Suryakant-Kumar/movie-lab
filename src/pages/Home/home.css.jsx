import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`

export const Prev = styled.button`
  border: none;
  background-color: var(--color-logo);
  color: var(--color-primary);
  font-weight: bold;
  padding: 0.25em 1em;
  cursor: pointer;
  border-radius: 0.25em;
`

export const Next = styled.button`
  border: none;
  background-color: var(--color-logo);
  color: var(--color-primary);
  font-weight: bold;
  padding: 0.25em 1em;
  cursor: pointer;
  border-radius: 0.25em;
`

export const PageNumber = styled.strong`
  width: 2rem;
  text-align: center;
  background-color: var(--color-secondary);
  color: var(--color-logo);
  border-radius: 0.25em;
  font-weight: bold;
`