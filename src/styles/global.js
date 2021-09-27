import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

///////////////////DESKTOP RESULÇAO 1024p///////////////////
@media only screen and (min-width: 1024px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 75%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1000px;
    }

    .log-topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1050px;
    }

    .logo {
      width: 120px;
      height: 60px;
      margin-top: -110px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 100%;
        margin-left: -150px;        
    }   

    .image-top {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }

    .setSuccess {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #0010c4;
    }

    .setError2 {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #ff0000;
    }    

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -230px;
        margin-top: 20px;
    }
}

///////////////////DESKTOP RESULÇAO 1360p///////////////////
@media only screen and (min-width: 1360px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 85%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1000px;
    }

    .log-topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1050px;
    }

    .logo {
      width: 120px;
      height: 60px;
      margin-top: -110px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 100%;
        margin-left: -150px;        
    }   

    .image-top {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }

    .setSuccess {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #0010c4;
    }

    .setError2 {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #ff0000;
    }    

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -140px;
        margin-top: -145px;
    }
}

///////////////////DESKTOP RESULÇAO 1920p///////////////////
@media only screen and (min-width: 1720px){
    html{
    font-family: "Oswald", sans-serif;
    font-size: 86.25%;
    }

    body {        
    zoom: 100%;
    overflow-x: hidden;
    overflow-y: hidden; 
    }

    a {
        text-decoration: none;
    }

    img {
        margin-right: 40px;
    }

    .topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1000px;
    }

    .log-topbar {
        position: absolute;
        margin-top: -55px;
        margin-left: 1050px;
    }

    .logo {
      width: 120px;
      height: 60px;
      margin-top: -110px;
    }

    .backgroundcover {
        background: #eee;
        height: 140vh;
    }

    .bgpng {
        position: absolute;
        width: 110%;
        height: 100%;
        margin-left: -150px;        
    }   

    .image-top {
        position: absolute;
        margin-top: -100px;
        margin-left: 920px;
        width: 100px;
        height: 100px;
    }

    .setSuccess {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #0010c4;
    }

    .setError2 {
        position: absolute;
        margin-top: 420px;
        margin-left: 370px;
        font-weight: 500;
        font-size: 20px;
        color: #ff0000;
    }    

    .dashboard {
        width: 50px;
        padding: 1px;
        margin-left: -150px;
        margin-top: -5'00px;
    }
}

`;
