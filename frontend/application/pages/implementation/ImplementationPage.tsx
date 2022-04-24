import * as React from "react";

import * as css from "./ImplementationPage.module.scss";
import ElevatorButton from "./components/ElevatorButton";
import ElevatorState from "./components/ElevatorState";

export interface ElevatorLocation {
    elevatorNumber: number,
    location: number,
}

class ImplementationPage extends React.Component {

    state = {
        elevatorLocations: [] as ElevatorLocation[],
    };

    componentDidMount() {
        fetch('http://localhost:3000/elevator')
            .then(response => response.json())
            .then(payload => this.setState({elevatorLocations: payload.elevators}));
    }

    handleCallElevator = (symbol: string) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({floor: Number(symbol)}),
        };
        fetch('http://localhost:3000/elevator', requestOptions)
            .then(response => response.json())
            .then(payload => this.setState({elevatorLocations: payload.elevators}));
    }

    public render() {
        return (
            <>
                <h2 className={css.title}>Elevator service</h2>
                <h3 className={css.title}>Current state of elevators</h3>
                <ElevatorState elevatorLocations={this.state.elevatorLocations}/>
                <h3 className={css.title}>Which floor would you like to call an elevator to?</h3>
                <ElevatorButton symbol={"1"} handleCallElevator={this.handleCallElevator}/>
                <ElevatorButton symbol={"2"} handleCallElevator={this.handleCallElevator}/>
                <ElevatorButton symbol={"3"} handleCallElevator={this.handleCallElevator}/>
            </>
        );
    }
}

export default ImplementationPage;
