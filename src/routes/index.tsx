import { Button } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter,Routes as Switch, Route, Navigate } from "react-router-dom"
import { Dashboard} from "../pages/dashboard/Dashboard"
import {Catalogo } from '../pages/dashboard/Catalogo'
import { useAppThemeContext, useDrawerContext } from "../shared/contexts";

export const Routes = ()=>{
    const {toggleTheme} = useAppThemeContext();
    const {toggleDrawerOpen, setDrawerOption} = useDrawerContext();
    
    useEffect(()=>{
        setDrawerOption([
            {
                label: 'Página Inicial',
                icon: 'home',
                path:'/pagina-inicial',
            }
        ])

    });
    
    return(
            <Switch>
                <Route path = '/pagina-incial' element={<Dashboard/>
                    //<div>
                      //  <Button variant= 'contained' color= 'primary' onClick={toggleDrawerOpen}> X </Button>
                        //<Button variant= 'contained' color= 'primary' onClick={toggleTheme}> Mudar para tema Claro/Escuro </Button>
                    //</div>
                }/>

               <Route path = '*' element={<Navigate to='/pagina-incial'/>}/>
               <Route path = '/passaros' element={<Catalogo/>}/>

            </Switch>
        
    )
}