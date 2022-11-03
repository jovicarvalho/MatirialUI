import {Icon,Box, Button, TextField, Paper, useTheme, InputAdornment} from '@mui/material'


interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClickaEmNovo?: (novoTexto: string) => void;

}

export const FerramentasDaListagem:  React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca='',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClickaEmNovo

}) => {
    const theme = useTheme();

    return (
        <Box height = 
            {theme.spacing(5)}
            gap = {3}
            marginX = {1}  
            padding = {1} 
            paddingX = {2} 
            display = 'flex' 
            alignItems = 'center'
            component = {Paper}
            >

           {mostrarInputBusca &&(
             <TextField 
             value = {textoDaBusca}
             onChange = {(e)=> aoMudarTextoDeBusca?.(e.target.value)}
             size= 'small'
             placeholder = 'Pesquisar...'
             InputProps ={{
                 endAdornment: (
                     <InputAdornment position="end">
                       <Icon>search</Icon>
                     </InputAdornment>
                   )
             }}
             />
           )}
            <Box display = 'flex' flex= {1} justifyContent = 'end'>
                {mostrarBotaoNovo &&    (
                    <Button
                    color = 'primary' 
                    variant ='contained'
                    disableElevation
                    endIcon = {<Icon>add</Icon>}
                    >   
                         {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    )

}