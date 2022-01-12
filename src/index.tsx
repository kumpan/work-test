import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import { Provider } from "react-redux";
import store from "./domain/store";
import { mediaQuery, Breakpoints } from "./domain/mediaQuery";
import App from "./App";

const globalStyle = css`
	html {
		height: 100vh;
	}

	body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100vw;
		height: 100vh;
		margin: 0;
		background: #eceff1;
		color: #263238;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
			"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

		#root {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: calc(100% - 16px);
			height: 100%;
			padding: 0 8px;

			${mediaQuery(Breakpoints.md)} {
				width: 768px;
			}
		}
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Global styles={globalStyle} />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
