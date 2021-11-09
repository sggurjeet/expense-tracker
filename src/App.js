import "./App.css";
// import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Expense from "./views/Expense";
import Income from "./views/Income";
import Dashboard from "./views/Dashboard";
// import Main from "./container/Main";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
