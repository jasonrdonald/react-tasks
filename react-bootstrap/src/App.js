import './App.css';
import React from 'react';
import Navigation from './Navigation';
import TasksPage from "./pages/navtasks";
import ConfigPage from "./pages/navconfig";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <TasksPage />
      <ConfigPage />
    </div>
  );
}

export default App;