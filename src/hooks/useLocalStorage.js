const useLocalStorage = (key, initialValue) => {
  const setItem = (value) => {
    localStorage.setItem(key, value);
  };

  const savedItem = localStorage.getItem(key);

  if (initialValue) {
    setItem(initialValue);
  }

  return [savedItem, setItem];
};

export default useLocalStorage;
