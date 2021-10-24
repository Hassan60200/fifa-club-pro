import React from 'react';
import { Card, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import datas from "../assets/stats.json";
import {Container, Grid} from "@material-ui/core";
import Box from "@mui/material/Box";
import {blue, red} from "@mui/material/colors";

const DataTeam = () => {

    const data = [...datas].shift();

    const cupWins = data.titlesWon;
    const promotion = data.promotions;
    const maintien = data.holds;
    const relegation = data.relegations;

    const RootStyle = styled(Card)(({ theme }) => ({
        boxShadow: 'none',
        textAlign: 'center',
        padding: theme.spacing(5, 0),
        color: red,
        backgroundColor: blue,
    }));

    const IconWrapperStyle = styled('div')(({ theme }) => ({
        margin: 'auto',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(3),
        color: theme.palette.primary.dark,
        backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
            theme.palette.primary.dark,
            0.24
        )} 100%)`
    }));
    return (
        <RootStyle>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Quelques chiffres </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <IconWrapperStyle>
                            {cupWins}
                        </IconWrapperStyle>
                        <Typography variant="h3">Titres remportés</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <IconWrapperStyle>
                            {promotion}
                        </IconWrapperStyle>
                        <Typography variant="h3">Promotions</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <IconWrapperStyle>
                            {maintien}
                        </IconWrapperStyle>
                        <Typography variant="h3">Maintiens</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <IconWrapperStyle>
                            {relegation}
                        </IconWrapperStyle>
                        <Typography variant="h3">Relegation</Typography>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
};

export default DataTeam;