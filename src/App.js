import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logo from "../src/pages/logo.png";

function App() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);
  const user = false;
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="navbar">
            <div className="navbar-logo">
              <img src={Logo} alt="" />
            </div>
            <div className="navbar-menu">
              <ul>
                <li>
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            {character.map((char) => (
              <table className="table">
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>E-mail</th>
                </tr>
                <tr>
                  <td>{char.name}</td>
                  <td>{char.username}</td>
                  <td>{char.email}</td>
                </tr>
              </table>
            ))}
          </div>
        </main>
      </div>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
