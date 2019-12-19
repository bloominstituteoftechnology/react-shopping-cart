import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() =>{

    const item = window.localStorage.getItem(key);

    //parse and return stored json or, if undefined return initialValue
    return item ? JSON.parse(item) : initialValue;

  });

  const setValue = value => {

    //Save State.
    setStoredValue(value);

    //Save to local storage.
    window.localStorage.setItem(key, JSON.stringify(value));

  };

  return [storedValue, setValue];

};
