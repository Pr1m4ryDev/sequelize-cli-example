import express from "express";
const app = express();
import { user } from "./database/models/_models.js";
import { Sequelize as con } from "./database/models/index.js";

app.listen(4001, async() => {
  console.clear();
  console.log("Server on port 4001");
  user.create({
    firstName: "Easy prro",
  });
  let a = await con.query("select pruebas(5);");
  console.log(a);
});
