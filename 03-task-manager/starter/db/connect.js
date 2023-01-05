const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://pandey_don:#imposterno1@notexpressproject.pycq0.mongodb.net/03-task-manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to db..."))
  .catch((err) => console.log(err));
