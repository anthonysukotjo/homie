import { border, width } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";


const LoginStyle = {

    width: '250px',
    height: '50px',
    /* button gradient */

    background: 'linear-gradient(#B8B8FF, #9381FF)',

    fontFamily: "Signika Negative, sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',

    textTransform: 'uppercase',
    textAlign: "center",
    color: '#FFFFFF'

} as React.CSSProperties;

const StepButton: FunctionComponent<{
    name: string,
    className?: string,
    href?: string,
    onclick?: any,
    type?: string,
    width?: string,
    height?: string,
    style?: React.CSSProperties
}> = props => {

    const type = props.type === "button" || props.type === "submit" || props.type === "reset" || props.type === undefined ? props.type : undefined;
    return (
        <Button
            className={props.className}
            href={props.href}
            onClick={() => props.onclick}
            type={type}
            style={props.style}
        >
            <p style={{ margin: "auto" }}>{props.name}</p>
        </Button >
    );
}

export default StepButton;