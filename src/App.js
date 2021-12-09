import "./App.css";
import { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Feedback from "./Feedback";
import NotFound from "./NotFound";
import Dogs from "./Dogs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Router Example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/form">Feedback</Link>
            </li>
            <li>
              <Link to="/dogs">Dogs</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" exact component={About}></Route>
          <Route path="/form" exact component={Feedback}></Route>
          <Route path="/" exact component={Home}></Route>
          {/* <Route path="/dogs/:breed" component={Dog} /> */}
          <Route path="/dogs" component={Dogs}></Route>
          <Route path="/" component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
