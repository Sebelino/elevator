import * as React from "react";
import ElevatorButton from "./ElevatorButton";

interface Props {
    handleCallElevator: any
}

const numberOfFloors = 20;

const ElevatorPanel = ({handleCallElevator}: Props) => {
    return (
        <div>
            {
                [...Array(numberOfFloors).keys()].map(n => {
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