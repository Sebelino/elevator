import * as React from "react";

import * as css from "./ImplementationPage.module.scss";
import ElevatorButton from "./components/ElevatorButton";
import ElevatorState from "./components/ElevatorState";

export interface ElevatorLocation {
    elevatorNumber: number,
    location: number,
}

class ImplementationPage extends React.Component {

    handleCallElevator = event => {
        console.log("Calling elevator");
    }

    public render() {
        const elevatorLocations: ElevatorLocation[] = [
            {elevatorNumber: 1, location: 2},
            {elevatorNumber: 2, location: 1},
        ];
        return (
            <>
                <h2 className={css.title}>Elevator service</h2>
                <h3 className={css.title}>Current state of elevators</h3>
                <ElevatorState elevatorLocations={elevatorLocations}/>
                <h3 className={css.title}>Which floor would you like to call an elevator to?</h3>
                <ElevatorButton symbol={"1"} handleCallElevator={this.handleCallElevator}/>
                <ElevatorButton symbol={"2"} handleCallElevator={this.handleCallElevator}/>
                <ElevatorButton symbol={"3"} handleCallElevator={this.handleCallElevator}/>
            </>
        );
    }
}

export default ImplementationPage;
