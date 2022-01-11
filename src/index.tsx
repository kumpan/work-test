import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import { Provider } from "react-redux";
import store from "./domain/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const globalStyle = css`
	html { 
		height: 100vh;
	}

	body { 
		background: #ECEFF1;
		color: #263238;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
		"Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		height: 100vh;
		width: 100vw;
		margin: 0;
	
		#root {
			height: 100vh;
			width: 100vw;	
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
