import {OutlinedButton} from "./components/outlined-button/outlined-button";
import "./global.css";
import ExtendedFabButton from './components/extended-fab-button/extended-fab-button';
import './temp/material/theme.css'
export default () => {
    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <title>Qwik Blank App</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </head>
            <body style={{
              display: "flex",
              gap: "5px",
              flexDirection: "column"
            }}>
            <div style="display: flex; gap: 16px">
                <OutlinedButton>Enabled</OutlinedButton>
                <OutlinedButton disabled>Disabled</OutlinedButton>
            </div>
            <br/>
            <div style="display: flex; gap: 16px">
                <OutlinedButton icon="add">Enabled</OutlinedButton>
                <OutlinedButton icon="add" disabled>Disabled</OutlinedButton>
            </div>
            <div style="display: flex; gap: 16px">
              <ExtendedFabButton icon="edit" color="primary" >Enabled with icon</ExtendedFabButton>
              <ExtendedFabButton icon="edit" disabled color="primary" >Disabled with icon</ExtendedFabButton>
              <ExtendedFabButton color="secondary" >Secondary</ExtendedFabButton>
              <ExtendedFabButton color="tertiary" >Secondary</ExtendedFabButton>
              <ExtendedFabButton color="error" >Error</ExtendedFabButton>
             
            </div>
            </body>
        </>
    );
};
