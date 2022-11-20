import { useContext, createContext, useState, useEffect } from "react";

const LoadingContext = createContext({});

const LoadingProvider = props => {
    const {children} = props;

    const [loading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(state => !state);
    };
    
    return (
        <LoadingContext.Provider value={{loading, toggleLoading}}>{children}</LoadingContext.Provider>
    );
}

const useLoading = () => {
    return useContext(LoadingContext);
}

export {LoadingProvider, useLoading};
// TODO refatorar esse cara aq, faz sentido um hook estar em context?

