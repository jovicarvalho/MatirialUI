import { Button } from "@mui/material";
import { useAppThemeContext, useDrawerContext } from "../../shared/contexts";

export const Dashboard = () =>{

    const {toggleTheme} = useAppThemeContext();
    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <div>  
            <Button variant= 'contained' color= 'primary' onClick={toggleDrawerOpen}> X </Button>
            <Button variant= 'contained' color= 'primary' onClick={toggleTheme}> Mudar para tema Claro/Escuro </Button>
        </div>

    )
}