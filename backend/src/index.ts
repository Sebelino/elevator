import * as cors from "kcors";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

const elevatorState = initialElevatorState();

function initialElevatorState() {
    return [
        {
            elevatorNumber: 1,
            location: 2,
        },
        {
            elevatorNumber: 2,
            location: 1,
        }
    ];
}

function distance(location, floorNumber) {
    return Math.abs(location - floorNumber);
}

function computeNewElevatorState(floorNumber) {
    const normalizedState = elevatorState.map((e) => {
        return {
            elevatorNumber: e.elevatorNumber,
            location: distance(e.location, floorNumber),
        };
    });
    normalizedState.sort((e1, e2) => e1.location - e2.location);
    const nearestElevator = normalizedState[0].elevatorNumber;
    const index = elevatorState.findIndex(e => e.elevatorNumber === nearestElevator);
    elevatorState[index] = {
        elevatorNumber: elevatorState[index].elevatorNumber,
        location: floorNumber,
    };
}

router.get("/elevator", listElevators)
    .post("/elevator", callElevator);

async function listElevators(context) {
    context.response.body = {
        elevators: elevatorState
    };
    context.response.status = 200;
}

async function callElevator(context) {
    /* tslint:disable:no-string-literal */
    const floorNumber = context.request.body["floor"];
    computeNewElevatorState(floorNumber);
    context.response.body = {
        elevators: elevatorState
    };
    context.response.status = 200;
}


app.use(bodyparser({
    enableTypes: ["json"],
}));
app.use(cors());

app.use(router.routes());

app.listen(3000);
