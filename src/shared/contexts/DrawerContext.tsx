import { createContext, useState, useCallback, useContext } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOption[];
    setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void;
    toggleDrawerOpen: () => void; 
}

interface IDrawerOption {
    icon:string;
    path: string;
    label: string;
}


export const DrawerContext = createContext({} as IDrawerContextData);    

export const useDrawerContext = () => {
    return useContext(DrawerContext);   
}

export const DrawerProvider: React.FC<{children:React.ReactNode}> = ({children}) => {

    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const [drawerOptions,setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    },[]);

    const handleSetDrawerOptions = useCallback((newDrawerOptions:IDrawerOption[])=>{
        setDrawerOptions(newDrawerOptions);
    },[]);

    return(
        
        <DrawerContext.Provider value={{ isDrawerOpen,drawerOptions,toggleDrawerOpen,setDrawerOption: handleSetDrawerOptions }}>
                {children}
        </DrawerContext.Provider>
    )
}