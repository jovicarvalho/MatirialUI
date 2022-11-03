import { Icon, Box, Typography, useTheme, IconButton, useMediaQuery } from "@mui/material"
import react, { ReactNode } from 'react';
import {useDrawerContext} from '../contexts';

interface ILayoutBaseDePaginaProps{
    titulo:string;
    children?: ReactNode;
    barraDeFerramentas?: ReactNode;

}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({children, titulo,barraDeFerramentas}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <Box  height = '100%' display = 'flex' flexDirection = 'column' gap={10}  >
            <Box  padding = {1} display= 'flex' alignItems= 'center' height = {theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} gap = {1}>
                {smDown && (
                <IconButton onClick={toggleDrawerOpen}>
                    <Icon color ='primary'>menu</Icon>
                </IconButton>)}

                <Typography
                 variant= {smDown ? 'h5' : mdDown ? 'h4': 'h3'}
                 overflow='hidden'
                 whiteSpace='nowrap'
                 textOverflow = 'ellipses'
                 display='flex'
                 sx={{
                    fontFamily: 'Raleway',
                  }}
                 >
                    {titulo}
                </Typography>
            
            </Box>
            <Box >

            {barraDeFerramentas}
            </Box>
            <Box flex = {1} overflow='auto'>
                {children}
            </Box>
        </Box>
    )
}