import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/expense" exact component={Expense} />
          <Route path="/income" exact component={Income} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
