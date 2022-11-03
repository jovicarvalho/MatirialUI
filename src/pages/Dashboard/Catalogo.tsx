import { Button } from "@mui/material";
import { useEffect } from "react";
import { useAppThemeContext, useDrawerContext } from "../../shared/contexts";
import { LayoutBaseDePagina } from "../../shared/layouts";
import react from 'react';
import { FerramentasDaListagem, FerramentasDeDetalhe } from "../../shared/components";



export const Catalogo = () =>{

    return (
       <div >
            <LayoutBaseDePagina 
            
            titulo='Catalogo de Aves' 
            barraDeFerramentas={(
                <FerramentasDaListagem
                mostrarInputBusca
                />
            )} >
                
            </LayoutBaseDePagina>
        </div>
    );
}
//<img width='100%' src= 'https://www.fotografemelhor.com.br/site/wp-content/uploads/2020/07/baixa_11_quinta-dupla_Ondrej-Prosicky_1078330286.jpg'/> 