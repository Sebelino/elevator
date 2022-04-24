import * as React from "react";

import * as css from "./ImplementationPage.module.scss";
import ElevatorButton from "./components/ElevatorButton";

class ImplementationPage extends React.Component {
    public render() {
        return (
            <>
                <h2 className={css.title}>Lägg implementationen här</h2>
                <ElevatorButton symbol={"1"}/>
                <ElevatorButton symbol={"2"}/>
                <ElevatorButton symbol={"3"}/>
            </>
        );
    }
}

export default ImplementationPage;
