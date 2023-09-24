import {OutlinedButton} from "./components/outlined-button/outlined-button";
import "./global.css";

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
            <body>
            <div style="display: flex; gap: 16px">
                <OutlinedButton>Enabled</OutlinedButton>
                <OutlinedButton disabled>Disabled</OutlinedButton>
            </div>
            <br/>
            <div style="display: flex; gap: 16px">
                <OutlinedButton icon="add">Enabled</OutlinedButton>
                <OutlinedButton icon="add" disabled>Disabled</OutlinedButton>
            </div>
            </body>
        </>
    );
};
