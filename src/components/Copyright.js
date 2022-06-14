import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export function Copyright() {
    return (
        <div className='copyright'>
            <Grid container direction="column" justify="space-around" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1" align="center" gutterBottom="true"><b>© Copyright 2022 Federico Bonjour</b></Typography>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center" gutterBottom="true"><b>Todos los derechos reservados</b></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}