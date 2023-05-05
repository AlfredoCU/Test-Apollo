import React from "react";

// * Without hooks
// import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

// * With hooks
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Characters from "../components/Characters";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h1 className="title">Graphql Apollo React</h1>
        <Characters />
      </ApolloProvider>
    );
  }
}

export default App;
