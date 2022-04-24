import * as cors from "kcors";
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";
import * as Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/elevator", (context) => {
    context.response.body = {
        elevators: [
            {
                number: 1,
                floor: 2,
            },
            {
                number: 2,
                floor: 1,
            }
        ]
    };
    context.response.status = 200;
});

// Add additional routes for implementation here...

app.use(bodyparser({
    enableTypes: ["json"],
}));
app.use(cors());

app.use(router.routes());

app.listen(3000);
