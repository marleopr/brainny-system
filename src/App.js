import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
// import AuthProvider from "./hooks/AuthContext";

function App() {
  return (
    <div style={{ fontFamily: 'Poppins', alignItems: 'center', width: '100vw', height: '100h', boxSizing: 'border-box' }}>
      <ChakraProvider>
        {/* <AuthProvider> */}
          <Router />
        {/* </AuthProvider> */}
      </ChakraProvider>
    </div>
  )
}

export default App;
