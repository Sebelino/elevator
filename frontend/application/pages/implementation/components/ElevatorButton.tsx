import * as React from "react";

interface Props {
    symbol: string
}

const ElevatorButton = ({symbol}: Props) => {
    return (
        <div>This is an elevator button: {symbol}</div>
    );
}

export default ElevatorButton;