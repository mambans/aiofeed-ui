import styled, { keyframes } from "styled-components";
import utilities from "@/utilities";

export const StyledButton = styled.button`
	transition: background-color 250ms, border-color 250ms;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	border-radius: ${({ theme }) => theme.borderRadius};
	background-color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	gap: 0.1rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.tertiary};
		border-color: ${({ theme }) => utilities.rgba(theme.colors.accent, 0.5)};
	}
`;
export const Wrapper = styled.div``;
export const loadingAnimation = keyframes`
 	100% {
		transform: rotate(1turn);
	}
`;
