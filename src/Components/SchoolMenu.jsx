import { AppBar} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import  Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {routes} from '../Constants/constants';

const SchoolMenu = () => {

    const navigate = useNavigate ();
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography 
                    variant='h6'
                    noWrap
                    onClick={()=> navigate("/homepage")}
                    component="a"
                    sx={{
                        mr:10,
                        display:{xs:'none', md:'flex'},
                        fontFamily:'arial',
                        fontWeight: 800,
                        color:'inherit',
                        textDecoration:'none'
                    }}>
                        Hola

                    </Typography>

                </Toolbar>
                <Box sx={{flexGrow: 1, display: {xs:'none', md:'flex'}}}>
                    {routes.pages.map((item, key) => (
                        <Button
                         key={key}
                         onClick={() => navigate (item.url)}
                         sx={{my:2, color:'white', display:'block'}}
                        >
                            {item.page}
                        </Button>
                    ))}
                </Box>

            </Container>
        </AppBar>
    )
}

export default SchoolMenu;