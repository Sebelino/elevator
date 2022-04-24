import * as React from "react";
import {ElevatorLocation} from "../ImplementationPage";

interface Props {
    elevatorLocation: ElevatorLocation,
}

const ElevatorItem = ({elevatorLocation}: Props) => {
    return (
        <li>Elevator {elevatorLocation.elevatorNumber}: floor {elevatorLocation.location}</li>
    );
}

export default ElevatorItem;