import React from 'react';
import Navigation from "../components/Navigation";
import {Doughnut, Pie} from "react-chartjs-2";
import DataTeam from "../assets/stats.json";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {Container, Grid} from "@material-ui/core";
const Stats = () => {

    const datas = [...DataTeam].shift();

    const data =  {
        labels:  ["Buts inscrits", "Buts encaissés"],
        datasets:[
            {
                data: [datas.alltimeGoals, datas.alltimeGoalsAgainst],
                backgroundColor: [
                    '#25e034',
                    '#de0021',
                ]
            }
        ]
    }

    const games =  {
        labels:  ["Victoires", "Nuls", "Défaites"],
        datasets:[
            {
                labels: "Totals de buts Pour/Contre",
                data: [datas.wins, datas.ties, datas.losses],
                backgroundColor: [
                    '#25e034',
                    '#9a9a95',
                    '#de0021',
                  ]
            }
        ]
    }


    return (
        <div>
            <Navigation />
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Dashboard </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{height:'300px',width:'400px'}}>
                            <Doughnut data={data} options={{ maintainAspectRatio: false }} type={"doughnut"}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{height:'300px',width:'400px'}}>
                            <Pie data={games} options={{maintainAspectRatio: false}} type={"pie"}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default Stats;