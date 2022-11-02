import { BrowserRouter,Routes as Switch, Route, Navigate } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard/dashboard"

export const Routes = ()=>{
    

    return(
            <Switch>
                <Route path = '/pagina-incial' element={<Dashboard/>}/>

               <Route path = '*' element={<Navigate to='/pagina-incial'/>}/>

            </Switch>
        
    )
}