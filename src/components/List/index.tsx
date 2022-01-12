import pokemonApi from "../../domain/api";
import { MainList } from "./List.styles";

const List = (): React.ReactElement => {
	// const first = pokemonApi.useGetPokemonListQuery("");
	// console.log(first.data?.results);
	// const second = pokemonApi.useGetPokemonListQuery(first.data?.next || "");
	// console.log(second.data?.results);

	// TODO:
	// 1. List fetched pokemon
	// 2. Functionallity to select a pokemon

	return <MainList>List</MainList>;
};

export default List;
