type UseLocalStorage<T> = {
  getItem: () => T;
  setItem: (value: string) => void;
};

const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): UseLocalStorage<T> => {
  const setItem = (value: string) => {
    localStorage.setItem(key, value);
  };

  const getItem = (): T => {
    const item = localStorage.getItem(key);

    try {
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error(e);
      return defaultValue;
    }
  };

  return { getItem, setItem };
};

export default useLocalStorage;
