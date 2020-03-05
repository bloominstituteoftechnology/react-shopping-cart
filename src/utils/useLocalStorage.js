import {useState} from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const customSetter = (newValue) => {
        setValue(newValue);
    }
    return [value, customSetter];
}

export const useLocalStorage = (key, initialValue) => {
     const [ storeValue, setStoreValue] = useInput( ()=> {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
     })
     const setValue = (newValue) => {
        setStoreValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
     }
     return [storeValue, setValue];
}