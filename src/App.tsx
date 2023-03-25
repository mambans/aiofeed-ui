import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import * as dark from "./themes/dark.json";
import { GlobalStyles } from "./themes/GlobalStyles";
import Button from "./components/Button";
import utilities from "./utilities";

function App() {
	const [count, setCount] = useState(0);

	return (
		<ThemeProvider theme={dark}>
			<Wrapper className="App">
				<GlobalStyles />
				<Button>Button123</Button>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;

const Wrapper = styled.div`
	position: relative;
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.primary};
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;

	*:not(input) {
		color: ${({ theme }) => theme.colors.text};
	}
`;
