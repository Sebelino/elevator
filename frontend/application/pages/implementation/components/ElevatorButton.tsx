import * as React from "react";

interface Props {
    symbol: string
}

const ElevatorButton = ({symbol}: Props) => {
    return (
        <button>{symbol}</button>
    );
}

export default ElevatorButton;