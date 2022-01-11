import pokemonApi from "./domain/api";

const App = () => {
	console.log("App");

	const first = pokemonApi.endpoints.getPokemonList.useQuery("");

	console.log(first.data?.results);

	const second = pokemonApi.endpoints.getPokemonList.useQuery(first.data?.next || "");

	console.log(second.data?.results);

	return (
		<div>
			<h2>App</h2>
		</div>
	);
};

export default App;
