import { border, width } from "@mui/system";
import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";


const style = {

    width: '250px',
    height: '50px',
    /* button gradient */

    // background: 'linear-gradient(#B8B8FF, #9381FF)',
    background: '#B8B8FF',
    border: 'none',
    fontFamily: "Signika Negative, sans-serif",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '25px',
    borderRadius: '10px',
    textTransform: 'uppercase',
    textAlign: "center",
    color: 'black',
    marginTop: "30px",
    outline: 'none',
    boxShadow: "5px 5px 4px #4444DD"
    // border: "30px"

} as React.CSSProperties;


const GeneralButton: FunctionComponent<{ name: string, className?: string, href?: string, onclick?: any, type?: string }> = props => {

    const type = props.type === "button" || props.type === "submit" || props.type === "reset" || props.type === undefined ? props.type : undefined;
    return (
        <Button
            className={props.className}
            href={props.href}
            onClick={() => props.onclick}
            type={type}
            style={style}
        >
            <p style={{ margin: "auto" }}>{props.name}</p>
        </Button >
    );
}

export default GeneralButton;