import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export function SobreMi() {
    return (
        <div className='sobreMi' id='SobreMi'>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
                <Grid item xs>
                    <img src='https://www.lastrapcrochet.com/wp-content/uploads/2019/09/Sobre-m%C3%AD.jpg' alt="Sobre mi" className='imagenSobreMi'></img>
                </Grid>
                <Grid item xs>
                    <Grid container direction="column" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">Hola! Soy Federico Bonjour</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">Desde pequeño siempre me interesó la tecnología, saber como funcionaban las cosas y es por esto que decidí adentrarme en el campo de la informática.</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">En la actualidad estoy cursando el segundo año de la carrera Analista Programador.</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" align="center" gutterBottom="true">Al terminar mis estudios espero exprimir todo lo que aprendí y seguir acumulando tanto conocimiento como experiencias.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}