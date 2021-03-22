import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/Pages/About";
import { TicTacToe } from "./components/Pages/TicTacToe";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/" component={TicTacToe} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;