import { Button } from "@mui/material";
import { useEffect } from "react";
import { useAppThemeContext, useDrawerContext } from "../../shared/contexts";

export const Dashboard = () =>{

    const {toggleTheme} = useAppThemeContext();
    const {toggleDrawerOpen, setDrawerOption} = useDrawerContext();
    
    useEffect(()=>{
        setDrawerOption([
            {
                label: 'Página Inicial',
                icon: 'home',
                path:'/pagina-inicial',
            },
            {
                label: 'Pássaros',
                icon: 'search',
                path:'/catalogo-de-passaros',
            },
        ])

    });

    return (
        <div>  
            <Button variant= 'contained' color= 'primary' onClick={toggleDrawerOpen}> X </Button>
            <Button variant= 'contained' color= 'primary' onClick={toggleTheme}> Mudar para tema Claro/Escuro </Button>
        </div>

    )
}