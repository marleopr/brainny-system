import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import theme from "./constants/theme";
// import AuthProvider from "./hooks/AuthContext";

function App() {
  const client = new ApolloClient({
    uri: 'http://test.frontend.api.brainny.cc/graphql',
    cache: new InMemoryCache(),
  });

  if (process.env.NODE_ENV === "development") {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <div style={{ fontFamily: 'Poppins', alignItems: 'center', width: '100vw', height: '100h', boxSizing: 'border-box' }}>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          {/* <AuthProvider> */}
          <Router />
          {/* </AuthProvider> */}
        </ApolloProvider>
      </ChakraProvider>
    </div>
  )
}

export default App;
