import {createTheme} from '@mui/material'
import { cyan, red} from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette:{
        mode:'dark',
        primary:{
            main: red[900],
            dark:red[800],
            light:red[500],
            contrastText:'#F7F6F3',

        },
        secondary:{
            main: cyan[500],
            dark:cyan[400],
            light:cyan[300],
            contrastText:'#F7F6F3',
        },
        background:{
            default:'#000000' ,
            paper:'#111111',

        },
        
    },
    typography:{
        allVariants:{
            color:'white'
        }
    }
});