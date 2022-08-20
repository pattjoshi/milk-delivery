import mongoos from "mongoose";

mongoos
  .connect("mongodb://localhost:27017/node-crud-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
