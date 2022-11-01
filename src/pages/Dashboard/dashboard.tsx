import { Button } from "@mui/material"
import { useAppThemeContext } from "../../shared/contexts"

export const Dashboard = () =>{
    
    const {toggleTheme} = useAppThemeContext();

    return (
    
        <Button variant= 'contained' color= 'primary' onClick={toggleTheme}> Mudar Cores da Página </Button>

    )
}