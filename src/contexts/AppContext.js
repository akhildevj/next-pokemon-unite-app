import { createContext, useContext, useEffect, useState } from 'react';

const context = {
  originalData: [],
  data: [],
  setData: () => {},
  resetData: () => {},
};

export const AppContext = createContext(context);

export const useData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  const initialDataFetch = async () => {
    const res = await fetch('https://unite-db.com/pokemon.json');
    const data = await res.json();
    if (data) {
      setOriginalData(data);
      setData(data);
    }
  };

  useEffect(() => {
    initialDataFetch();
  }, []);

  const resetData = () => setData(originalData);

  return (
    <AppContext.Provider value={{ originalData, data, setData, resetData }}>
      {children}
    </AppContext.Provider>
  );
};
