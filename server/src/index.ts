import express, {Application, Request, Response} from "express";
import { UserRouter } from "./routes/user-route";

const app:Application = express();
const PORT = process.env.PORT || 3001;

app.get("/", UserRouter);

app.listen(PORT, () => console.log(`[SERVER]:started on ${PORT}`));