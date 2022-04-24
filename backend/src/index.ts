import * as cors from "kcors";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/elevator", listElevators);

async function listElevators(context) {
    context.response.body = {
        elevators: [
            {
                elevatorNumber: 1,
                location: 2,
            },
            {
                elevatorNumber: 2,
                location: 1,
            }
        ]
    };
    context.response.status = 200;
}

router.post("/elevator", (context) => {
    context.response.body = {
        elevators: [
            {
                elevatorNumber: 1,
                location: 3,
            },
            {
                elevatorNumber: 2,
                location: 1,
            }
        ]
    };
    context.response.status = 200;
});

app.use(bodyparser({
    enableTypes: ["json"],
}));
app.use(cors());

app.use(router.routes());

app.listen(3000);
