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
          <Route path="/portfolio" element={<Quote />}>
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/gitHub" element={<GitHubCard />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
