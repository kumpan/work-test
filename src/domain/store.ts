import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import pokemonApi from "./api";

// https://stackoverflow.com/a/68212175
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const store = configureStore({
	reducer: { [pokemonApi.reducerPath]: pokemonApi.reducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;
