import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Wrapper } from "./features/Wrapper";

function App() {
	return (
		<HashRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route
						path="/"
						element={
							<Wrapper isFirstPage={true} />
						}
					/>
					<Route
						path="/page2"
						element={
							<Wrapper isFirstPage={false} />
						}
					/>
				</Routes>
			</ThemeProvider>
		</HashRouter>
	);
}

export default App;
