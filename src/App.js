import React, { useContext } from "react";
import GlobalStyle from './styles/global';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Foot from "./components/Footer";
import Vacineflex from "./components/routes/Dashboard";
import backgroundImage from './styles/assets/background.png';
import Menu from './components/routes/Menu';
import Colaborador from './components/routes/Colaborador';
import Controle from './components/routes/Controle';
import Sigin from "./components/routes/Sigin";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { authenticated } = useContext(AuthContext);

  return (

    <Route {...rest} render={props => (
      authenticated ? (
        <Component {...props} />
      ) : <Redirect to={{ pathname: '/sigin', state: { from: props.location } }} />
    )} />
  );
};

function App() {

  return (
    <>
      <AuthProvider >
        <BrowserRouter>
          <Navbar />
          <div className="backgroundcover">
          <img className="bgpng" src={backgroundImage} alt="" />
          </div>
            
          <Switch>
            <Route path="/" exact component={Vacineflex} />
            <Route path="/sigin" exact component={Sigin} />
            <Route path="/menu" exact component={Menu} />
            <PrivateRoute path="/colaborador" exact component={Colaborador} />
            <PrivateRoute path="/controle" exact component={Controle} />
          </Switch>
        </BrowserRouter>
        <Foot />
        <GlobalStyle />
      </AuthProvider>
    </>
  )
}

export default App;
