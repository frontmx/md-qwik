import {OutlinedButton} from "./components/outlined-button/outlined-button";

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
            <OutlinedButton>Outlined button</OutlinedButton>
            <br/>
            <OutlinedButton icon="add">Outlined button</OutlinedButton>
            </body>
        </>
    );
};
