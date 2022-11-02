import { createContext, useState, useCallback, useMemo, useContext } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

export const DrawerContext = createContext({} as IDrawerContextData);    

export const useDrawerContext = () => {
    return useContext(DrawerContext);   
}

export const DrawerProvider: React.FC<{children:React.ReactNode}> = ({children}) => {

    const [isDrawerOpen,setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    },[]);
    
    return(
        
        <DrawerContext.Provider value={{ isDrawerOpen,toggleDrawerOpen }}>
           
                {children}
             
        </DrawerContext.Provider>
    )
}