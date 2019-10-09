import React, { createContext } from "react";
import App from "../App";

const ProductContext = createContext();

<ProductContext.Provider value={{ products, addItem }}>
<App />
</ProductContext.Provider>