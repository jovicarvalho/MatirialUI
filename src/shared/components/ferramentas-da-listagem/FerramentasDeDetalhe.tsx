import {Divider, Button, Icon, Box, useTheme, Paper} from '@mui/material'


export const  FerramentasDeDetalhe: React.FC = () => {
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
            <Divider variant ='middle'></Divider>          
            
            <Button
                color = 'primary' 
                variant ='outlined'
                startIcon = {<Icon> arrow_back</Icon>}
                > Voltar
            </Button>
        </Box>
    )
}