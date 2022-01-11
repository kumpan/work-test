import pokemonApi from "./domain/api";

const App = () => {
	console.log("App");

	const first = pokemonApi.useGetPokemonListQuery("");

	console.log(first.data?.results);

	const second = pokemonApi.useGetPokemonListQuery(first.data?.next || "");

	console.log(second.data?.results);

	return (
		<div>
			<h2>App</h2>
		</div>
	);
};

export default App;
