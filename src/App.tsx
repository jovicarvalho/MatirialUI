import {Routes} from './routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider } from './shared/contexts/ThemeContexts';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {

  return (

    <AppThemeProvider>
      <BrowserRouter>

        <MenuLateral>
          
          <Routes/>

        </MenuLateral>
         
       
      </BrowserRouter>
        

    </AppThemeProvider>

  )

 
}
