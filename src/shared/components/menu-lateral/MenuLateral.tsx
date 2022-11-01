import { Box, Drawer, useTheme } from "@mui/material";
import React, { Children } from "react";

export const MenuLateral: React.FC <{children:React.ReactNode}> = ({ children }) => {
     
    const theme = useTheme();
        return (
            <>
                <Drawer variant ='permanent'>
                    Teste
                </Drawer>

                <Box height= '100vh' marginLeft={theme.spacing(28)}   > 
                    {children}
                </Box>

            </>
         )

};