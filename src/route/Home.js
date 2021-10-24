import React from 'react';
import Navigation from "../components/Navigation";
import Player from "../components/Player";
import DataTeam from "../components/DataTeam";

const Home = () => {


    return (
        <div>
            <Navigation/>
            <DataTeam/>
            <Player/>
        </div>
    );
};

export default Home;