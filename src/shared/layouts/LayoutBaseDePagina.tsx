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

    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <Box color='white' height = '100%' display = 'flex' flexDirection = 'column' gap={10}  >
            <Box  padding = {1} display= 'flex' alignItems= 'center' height = {theme.spacing(12)} gap = {1}>
                {smDown && (
                <IconButton onClick={toggleDrawerOpen}>
                    <Icon color ='primary'>menu</Icon>
                </IconButton>)}

                <Typography variant='h4'>
                    {titulo}
                </Typography>
            
            </Box>
            <Box >
    {/*    <img width='100%' src= 'https://www.fotografemelhor.com.br/site/wp-content/uploads/2020/07/baixa_11_quinta-dupla_Ondrej-Prosicky_1078330286.jpg'/> */}
            {barraDeFerramentas}
            </Box>
            {children}
        </Box>
    )
}