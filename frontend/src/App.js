import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import PublicRoute from './components/public-routes/PublicRoute';
import PrivateRoute from './components/admin-dashboard/PrivateRoute';

//public files
import Home from './components/home/Home';
import Report from './components/report-form/Report';
import Login from './components/login/Login';
import RegisterForm from './components/register-admin/RegisterForm';

//private files
import Reports from './components/admin-dashboard/reports/Reports';
import Admin from './components/admin-dashboard/admin/Admin';





function App() {
  return (
    <Router>
      <div>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/report"  component={Report} />
        <PublicRoute path="/login"  component={Login} />
        <PublicRoute path="/register"  component={RegisterForm} />
        
        <PrivateRoute exact path="/reports"  component={Reports} />
        <PrivateRoute exact path="/admin"  component={Admin} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
