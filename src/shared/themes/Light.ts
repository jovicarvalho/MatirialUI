import {createTheme} from '@mui/material'
import { cyan, red } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';

export const LightTheme = createTheme({
    palette:{
        mode:'light'
        ,
        primary:{
            main: red[900],
            dark:red[800],
            light:red[500],
            contrastText:'#f7f6f3',
        },
        secondary:{
            main: cyan[500],
            dark:cyan[400],
            light:cyan[300],
            contrastText:'#f7f6f3',
        },
        background:{
            default:'#9E9E9B',
            paper:'#ffffff',

        }
    },
    typography:{
        allVariants:{
            color:'black'
        }
    }
});