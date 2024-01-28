import { createContext, useCallback, useContext, useMemo, useState } from "react";

const StorageContext = createContext();

export const StorageProvider = ({children}) => {
    const [values, setValues] = useState({});
    const get = useCallback((key) => {
        const value = localStorage.getItem(key);
        setValues((prev) => ({ ...prev, [key]: value}));
        return value;
    }, [setValues]);

    const set = useCallback((key, value) => {
        localStorage.setItem(key, value);
        setValues((prev) => ({ ...prev, [key]: value}));
    }, [setValues]);

    const remove = useCallback((key, value) => {
        localStorage.removeItem(key);
        setValues((prev) => {
            const obj = {...prev};
            delete obj.value;
            return obj;
        });
    }, [setValues]);

    const contextValue = useMemo(() => ({set, get, remove, values}), [set, get, remove, values ]);

    return (
        <StorageContext.Provider value={contextValue}>
            {children}
        </StorageContext.Provider>
    )
}

export const useStorage = () => useContext(StorageContext);
