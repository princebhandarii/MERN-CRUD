import Express from "express";

import {
  Createuser,
  Delete,
  GetAll,
  Getone,
  Update,
} from "../controller/UserController.js";

const routes = Express.Router();

routes.post("/create", Createuser);

routes.get("/getall", GetAll);
routes.get("/getone/:id", Getone);
routes.put("/update/:id", Update);
routes.delete("/delete/:id", Delete);

export default routes;
