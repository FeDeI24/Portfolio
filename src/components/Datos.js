import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export function Datos() {
    return (
        <div className='datos' id='Datos'>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
                <Grid item xs>
                    <img src='https://cdn-icons-png.flaticon.com/512/30/30427.png' alt="Datos" className='imagenDatos'></img>
                </Grid>
                <Grid item xs>
                    <Grid container direction="column" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">Nombre: Federico Emiliano Bonjour Alvarez</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">Fecha de nacimiento: 24/10/2001</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">Estudiante en CTC, carrera Analista Programador</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}