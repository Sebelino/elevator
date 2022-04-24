import * as React from "react";
import {ElevatorLocation} from "../ImplementationPage";
import ElevatorItem from "./ElevatorItem";

interface Props {
    elevatorLocations: ElevatorLocation[],
}

const ElevatorState = ({elevatorLocations}: Props) => {
    return (
        <ul>
            {elevatorLocations.map(e => {
                return <ElevatorItem
                    key={e.elevatorNumber}
                    elevatorLocation={e}
                />;
            })}
        </ul>
    );
}

export default ElevatorState;