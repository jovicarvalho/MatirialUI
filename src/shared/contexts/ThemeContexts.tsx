import { createContext, useState, useCallback, useMemo, useContext } from "react";
import { DarkTheme, LightTheme } from "../themes";
import { Box, ThemeProvider } from "@mui/material"

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

export const ThemeContexts = createContext({} as IThemeContextData);    

export const useAppThemeContext = () => {
    return useContext(ThemeContexts);   
}

export const AppThemeProvider: React.FC<{children:React.ReactNode}> = ({children}) => {

    const [themeName,setThemeName] = useState<'light' | 'dark'>('dark');

    const toggleTheme = useCallback(()=>{
        setThemeName(oldThemeName => oldThemeName ==='light' ? 'dark' : 'light');
    },[]);

    const  theme = useMemo(()=>{
        if(themeName === 'light') return LightTheme;
        return DarkTheme; 
    },[themeName])
    
    return(
        
        <ThemeContexts.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme = {DarkTheme}>
                <Box width="100vw" height="100vh" bgcolor ={theme.palette.background.default}>
                {children}
                </Box>
            </ThemeProvider>
        </ThemeContexts.Provider>
    )
}