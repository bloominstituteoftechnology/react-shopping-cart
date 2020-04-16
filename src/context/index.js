import { createContext } from "react";

// Calling createContext creates a Provider and a Consumer
// Provider and Consumer must be components
export const ProductContext = createContext();
// export const GameContext = createContext();
console.log({ ProductContext });
