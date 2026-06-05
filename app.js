import express from "express";
import path from "node:path";

import indexRouter from "./routers/indexRouter.js";

const app = express();

const PORT = 3000;

const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send("error");
})

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server listening on port ${PORT}`);
});