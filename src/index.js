/*

Component : client

*/
/** ****************************** Import Packages *************************** */
import React from "react";
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from "material-ui/styles";

/** ****************************** Import theme *************************** */
//import theme from "./theme";

/** ****************************** Import containers *************************** */
//import App from './containers/App';

const App = () =>{
  return (
    <h1>Hello manoj</h1>
  )
}
ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);


