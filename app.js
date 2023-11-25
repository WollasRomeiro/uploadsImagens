const express = require("express");
const app = express();

require("dotenv").config();
require("./db");

const port = process.env.PORT || 3000;

const pictureRoutes = require("./routes/pictureRoutes");

app.use("/pictures", pictureRoutes)

app.listen(port, () => {
    console.log(`O servidor esta rodando na porta ${port}`);
});