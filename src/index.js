import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ChakraProvider } from '@chakra-ui/react';
// import AuthProvider from './hooks/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    {/* <AuthProvider> */}
    <App />
    {/* </AuthProvider> */}
    {/* </ChakraProvider> */}
  </React.StrictMode>
);