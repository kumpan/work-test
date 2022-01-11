import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NamedAPIResourceList, Pokemon } from "../models";
import { BASE_API_URL } from "./constants";

export const pokemonApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
	endpoints: (builder) => ({
		getPokemonByName: builder.query<Pokemon, string>({
			query: (name) => `pokemon/${name}`,
		}),
		getPokemonList: builder.query<NamedAPIResourceList, string>({
			query: (query) => query.split(BASE_API_URL)[1] || "pokemon",
		}),
	}),
});

export default pokemonApi;
