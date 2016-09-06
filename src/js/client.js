import React from "react";
import ReactDOM from "react-dom";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from "./components/Layout";

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Layout />
    </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);