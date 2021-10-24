import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./route/Home";
import Stats from "./route/Stats";
import Buteurs from "./route/Buteurs";
import Passeurs from "./route/Passeurs";
import BestPlayers from "./route/BestPlayers";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component="Home">
                    <Home />
                </Route>
                <Route path="/stats" exact component="Home">
                    <Stats />
                </Route>
                <Route path="/scorers" exact component="Home">
                    <Buteurs />
                </Route>
                <Route path="/assists" exact component="Home">
                    <Passeurs />
                </Route>
                <Route path="/best-players" exact component="Home">
                    <BestPlayers />
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
