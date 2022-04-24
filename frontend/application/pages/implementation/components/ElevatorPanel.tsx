import * as React from "react";
import ElevatorButton from "./ElevatorButton";

interface Props {
    handleCallElevator: any
}

const ElevatorPanel = ({handleCallElevator}: Props) => {
    return (
        <div>
            {
                [...Array(3).keys()].map(n => {
                    return (<ElevatorButton
                        key={(n + 1).toString()}
                        symbol={(n + 1).toString()}
                        handleCallElevator={handleCallElevator}
                    />)
                })
            }
        </div>
    );
}

export default ElevatorPanel;