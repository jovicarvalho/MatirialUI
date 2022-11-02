import { Box, Drawer, useTheme, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import React from 'react';

export const MenuLateral: React.FC <{children:React.ReactNode}> = ({ children }) => {
     
    const theme = useTheme();
        return (
            <>
                <Drawer variant ='permanent'>

                    <Box width = {theme.spacing(28)} height = '100%' display = 'flex' flexDirection ='column'>
 
                        <Box width= '100%' height= {theme.spacing(20)}  display='flex' alignItems= 'center' justifyContent='center' >
                        <img
                            //sx={{height:theme.spacing(12), width:theme.spacing(12)}}
                            width="80%"
                            alt='Icone do Site, uma fenix vermelha'
                            src='https://imageup.me/images/icone-transparente.png' />
                        </Box>

                        <Divider/>
                        <Box flex={1} color='white'>
                            <List component="nav">
                                <ListItemButton>
                                <ListItemIcon >
                                    <Icon style={{ color: "White" }}> home </Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                                </ListItemButton>
                            </List>

                        </Box>

                    </Box>

                </Drawer>

                <Box height= '100vh' marginLeft={theme.spacing(28)}   > 
                    {children}
                </Box>

            </>
         )

};