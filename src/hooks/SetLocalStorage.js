import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    })

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}