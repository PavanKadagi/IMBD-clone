import { createContext, useContext, useState } from "react";


export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) =>{
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBar,setShowSearchBar] = useState(false);

    const value = {
        drawerOpen,
        setDrawerOpen,
        showSearchBar,
        setShowSearchBar
    };

    return <UIContext.Provider value={value} >{children}</UIContext.Provider>
}

