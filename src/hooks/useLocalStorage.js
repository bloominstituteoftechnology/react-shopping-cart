import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const updateValue = newValue => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [storedValue, updateValue];
};
