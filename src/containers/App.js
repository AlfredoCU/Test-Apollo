// * Without hooks
// import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

// * With hooks
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useState } from "react";
import Characters from "../components/Characters";
import Episode from "../components/Episode";
import Episodes from "../components/Episodes";

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache(),
});

const App = () => {
	const [count, setCount] = useState(1);

	const handleCount = () => {
		setCount(count + 1);
	};
	return (
		<ApolloProvider client={client}>
			<h1 className="title">Graphql Apollo React</h1>
			<Characters />
			<Episodes />
			<Episode id={count} />
			<button type="button" onClick={handleCount}>
				Add
			</button>
		</ApolloProvider>
	);
};

export default App;
