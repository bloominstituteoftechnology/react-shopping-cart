
// - Inside that folder create a new file named `ProductContext.js`

// - In this file, import the `createContext` function from the react library and create our `ProductContext`.

import { createContext } from 'react';

export const ProductContext = createContext();

// - Now that we've created our `ProductContext` we can import into our `App.js`. Now we can start providing data across our application!