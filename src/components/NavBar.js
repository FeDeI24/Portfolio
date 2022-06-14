import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export function NavBar() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    return (
        <div className="navBar">
            <ThemeProvider theme={darkTheme}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Federico Bonjour
                        </Typography>
                        <Button color="inherit" href='#SobreMi'>Sobre Mi</Button>
                        <Button color="inherit" href='#Datos'>Datos</Button>
                        <Button color="inherit" href='#Contacto'>Contacto</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}
