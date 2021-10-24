import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/stats" activeClassName="nav-active">
                Statistique
            </NavLink>
            <NavLink exact to="/buteurs" activeClassName="nav-active">
                Meilleurs Buteurs
            </NavLink>
            <NavLink exact to="/passeurs" activeClassName="nav-active">
                Meilleurs passeurs
            </NavLink>
            <NavLink exact to="/best-players" activeClassName="nav-active">
                Meilleurs joueurs
            </NavLink>
        </div>
    );
};

export default Navigation;