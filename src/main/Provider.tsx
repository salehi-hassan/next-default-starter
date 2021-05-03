import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default Provider;
