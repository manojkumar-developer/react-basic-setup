/* 

Component : theme

*/
/** ****************************** Import Packages *************************** */
import getMuiTheme from "material-ui/styles/getMuiTheme";

import {
  cyan700,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from "material-ui/styles/colors";

import { fade } from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";

const theme = getMuiTheme({
  spacing,
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary: "#57B1FB",
    primary1Color: "#57B1FB",
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: "#FA575D",
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: "#57B1FB",
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
});

export default theme;
