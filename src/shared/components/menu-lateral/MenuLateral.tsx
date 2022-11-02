import { Box, Drawer, useTheme, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from '@mui/material';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext } from '../../contexts';


interface IListItemLinkProps{
    to:string;
    icon: string;
    label: string;
    onClick: (  () => void) | undefined ;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick}) =>{
    const navigate = useNavigate();
    
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end: false})

    const handleClick = () =>{
        navigate(to);
        onClick?.(); 
    }
    return(
        <ListItemButton selected = {!!match} onClick = {handleClick}>
            <ListItemIcon >
                <Icon style={{ color: "White" }}> {icon} </Icon>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>

    )

}

export const MenuLateral: React.FC <{children:React.ReactNode}> = ({ children }) => {
     
    const theme = useTheme();
    const smDown = useMediaQuery (theme.breakpoints.down('sm'));
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();

        return (
            <>
                <Drawer open = {isDrawerOpen} variant ={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

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
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    to ={drawerOption.path}
                                    label ={drawerOption.label}
                                    onClick = {smDown ? toggleDrawerOpen: undefined}
                                />))}
                                
                             {/*  <ListItemLink
                                    icon='search'
                                    to ='/passaros'
                                    label =' Catálogo de  Passáros'
                                    onClick = {smDown ? toggleDrawerOpen: undefined}
                                />*/}
                            </List>

                        </Box>

                    </Box>

                </Drawer>

                <Box height= '100vh' marginLeft={smDown ? 0 : theme.spacing(28)}   > 
                    {children}
                </Box>

            </>
         )

};

 