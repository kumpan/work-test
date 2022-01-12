import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./domain/store";

const createComponent = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

describe("App", () => {
	it("should render without", () => {
		render(createComponent());

		expect(screen.getByText("List")).toBeDefined();
	});
});
