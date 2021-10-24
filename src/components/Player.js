import React from 'react';
import Cards from "./Cards";
import Players from "../assets/player.json";
import {Container, Grid} from "@material-ui/core";

const Player = () => {


    const dataPlayer = Players;
    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <ul className="container">
                    {dataPlayer.members.map((player) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Cards player={player} key={player.name}/>
                        </Grid>
                    ))}
                </ul>
            </Grid>
        </Container>
    );
};

export default Player;