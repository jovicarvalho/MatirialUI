import {Divider,Button, Icon, Box, useTheme, Paper} from '@mui/material'

interface IFerramentasDaListagemProps {
    textoBotaoNovo?:string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    aoClickarEmNovo?: () => void;
    aoClickarEmVoltar?:  () => void;
    aoClickarEmApagar?:  () => void;
    aoClickarEmSalvar?: () => void;
    aoClikcarEmSalvarEFechar?:  () => void;



}

export const  FerramentasDeDetalhe: React.FC<IFerramentasDaListagemProps> = ( 

) => {
const theme = useTheme(); 


    return (
        <Box 
            height = {theme.spacing(5)}
            gap = {3}
            marginX = {1}  
            padding = {1} 
            paddingX = {2} 
            display = 'flex' 
            alignItems = 'center'
            component = {Paper}
            >
            <Button
                color = 'primary' 
                variant ='contained'
                startIcon = {<Icon>save</Icon>}
                > Salvar
            </Button>
            <Button
                color = 'primary' 
                variant ='outlined'
                startIcon = {<Icon> starsOutlined</Icon>}
                > Salvar e voltar 
            </Button>

            <Button
                color = 'primary' 
                variant ='outlined'
                startIcon = {<Icon> delete </Icon>}
                > Apagar
            </Button>
            <Button
                color = 'primary' 
                variant ='outlined'
                startIcon = {<Icon>add</Icon>}
                > Novo
            </Button>
            <Divider  orientation='vertical' variant ='middle'  ></Divider>          
            
            <Button
                color = 'primary' 
                variant ='outlined'
                startIcon = {<Icon> arrow_back</Icon>}
                > Voltar
            </Button>
        </Box>
    )
}