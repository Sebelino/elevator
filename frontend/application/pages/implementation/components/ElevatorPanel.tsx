import * as React from "react";
import ElevatorButton from "./ElevatorButton";

interface Props {
    handleCallElevator: any
}

const ElevatorPanel = ({handleCallElevator}: Props) => {
    return (
        <div>
            {
                ["1", "2", "3"].map(symbol => {
                    return (<ElevatorButton
                        key={symbol}
                        symbol={symbol}
                        handleCallElevator={handleCallElevator}
                    />)
                })
            }
        </div>
    );
}

export default ElevatorPanel;