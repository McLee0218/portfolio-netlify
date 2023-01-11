// import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quote from "./components/Quote";
import { Dashboard, GitHubCard} from "./components/Dashboard";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Quote />}>
          </Route>
          <Route exact path="/Dashboard" element={<Dashboard />}>
          </Route>
          <Route exact path="/gitHub" element={<GitHubCard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
