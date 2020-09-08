import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Settings from './components/settings';
import Reports from './components/reports';

const App = () => (
  <BrowserRouter>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/settings" component={Settings} />
    <Route path="/reports" component={Reports} />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
