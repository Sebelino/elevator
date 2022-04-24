import * as React from "react";

import * as css from "./ImplementationPage.module.scss";
import ElevatorButton from "./components/ElevatorButton";

class ImplementationPage extends React.Component {
    public render() {
        return (
            <>
                <h2 className={css.title}>Elevator service</h2>
                <h3 className={css.title}>Current state of elevators</h3>
                <li>Elevator 1: 2</li>
                <li>Elevator 2: 1</li>
                <h3 className={css.title}>Which floor would you like to call an elevator to?</h3>
                <ElevatorButton symbol={"1"}/>
                <ElevatorButton symbol={"2"}/>
                <ElevatorButton symbol={"3"}/>
            </>
        );
    }
}

export default ImplementationPage;
