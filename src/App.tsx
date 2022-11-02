import {Routes} from './routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider} from './shared/contexts/ThemeContexts';
import {DrawerProvider} from './shared/contexts/DrawerContext';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {

  return (

    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>

            <Routes/>

          </MenuLateral>
          
        
        </BrowserRouter>
      </DrawerProvider>

    </AppThemeProvider>

  )

 
}
