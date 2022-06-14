import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export function Contacto() {
    return (
        <div className='contacto' id='Contacto'>
            <Grid container direction="column" justify="space-around" alignItems="center" spacing={2}>
                <Grid item xs>
                    <Typography variant="h5" align="center" gutterBottom="true"><b>Contacto</b></Typography>
                </Grid>
                <Grid item xs>
                    <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item xs>
                            <Typography>Correo:fedebonjour123@gmail.com</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>Tel: 098179410</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Grid className='social' container direction="row" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item xs>
                            <a href='https://www.linkedin.com/in/federico-bonjour-alvarez-a63993235/' className='linkedin'>
                                <LinkedInIcon></LinkedInIcon>
                            </a>
                        </Grid>
                        <Grid item xs>
                            <a href='https://www.youtube.com/channel/UCokXSLht-WXw-9no5C9TYXA' className='youtube'>
                                <YouTubeIcon></YouTubeIcon>
                            </a>
                        </Grid>
                        <Grid item xs>
                            <a href='https://www.instagram.com/fd.bonjour/' className='instagram'>
                                <InstagramIcon></InstagramIcon>
                            </a>
                        </Grid>
                        <Grid item xs>
                            <a href='https://www.facebook.com/FedeBonjour/' className='facebook'>
                                <FacebookIcon></FacebookIcon>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}