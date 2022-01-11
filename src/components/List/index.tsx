import pokemonApi from "../../domain/api";
import { MainList } from "./List.styles";

const List = (): React.ReactElement => {
	const first = pokemonApi.useGetPokemonListQuery("");

	console.log(first.data?.results);

	const second = pokemonApi.useGetPokemonListQuery(first.data?.next || "");

	console.log(second.data?.results);

	return <MainList>List</MainList>;
};

export default List;
