import { useEffect, useState } from "react";
import { PREFIX } from "./constants";

const useLocalStorage = (key, initialUseStateValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue !== null && jsonValue !== undefined)
        return JSON.parse(jsonValue);
      if (typeof initialUseStateValue === "function") {
        return initialUseStateValue();
      } else return initialUseStateValue;
    } catch (e) {
      console.error(e);
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
