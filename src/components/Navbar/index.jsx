import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from '../../styles/assets/logo.png'

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {

  const { authenticated, handleLogout } = useContext(AuthContext);
  const [nome, setNome] = useState('');

  useEffect(() => {

    if (authenticated) {
      const User = JSON.parse(localStorage.getItem('@user'));
      setNome(User.displayname);
    }
  }, [authenticated]);


  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <img src={Logo} alt="Flex" />
        <Typography variant="h4" className={classes.logo}>
          Vacinômetro Covid-19 
        </Typography>
        {
          authenticated &&
            <>
              <Typography variant="h5" className={classes.logo}>
                Bem Vindo(a) - {nome}
              </Typography>
            </>

        }

        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          {

            authenticated ?
              <>
                <Link to="/colaborador" className={classes.link}>
                  Colaborador
                </Link>
                <Link to="/controle" className={classes.link}>
                  Controle
                </Link>
                <Link to="/" onClick={() => handleLogout()} className={classes.link}>
                  LogOut
                </Link>
              </>
              :
              <Link to="/sigin" className={classes.link}>
                Login
              </Link>

          }
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
