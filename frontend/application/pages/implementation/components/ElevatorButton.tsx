import * as React from "react";

interface Props {
    symbol: string
    handleCallElevator: any
}

const ElevatorButton = ({symbol, handleCallElevator}: Props) => {
    return (
        <button onClick={() => handleCallElevator(symbol)}>{symbol}</button>
    );
}

export default ElevatorButton;