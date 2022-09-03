import mongoos from "mongoose";

const db =
  "mongodb+srv://bookingom:bookingom@cluster0.zw8ic2n.mongodb.net/MilkbookingByom?retryWrites=true&w=majority";

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
