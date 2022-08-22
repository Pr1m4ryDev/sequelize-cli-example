import User from "./user.js";

import { Sequelize, DataTypes } from "./index.js";

const user = User(Sequelize, DataTypes);


export {user};