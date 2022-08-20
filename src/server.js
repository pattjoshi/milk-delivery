import express from "express";
require("./db/conn");

const MilkOrders = require("./models/milkOrder");

const app = express();
const PORT = process.env.PORT || 5000; // process.env.PORT is for heroku

app.use(express.json());

// POST: To place an order.
app.post("/milkOrder", async (req, res) => {
  try {
    const milkOrder = await MilkOrders.create(req.body);
    // console.log(milkOrder);
    res.status(201).send(milkOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// GET: get all orders for particular date.

app.get("/milkOrder/:date", async (req, res) => {
  try {
    const Date = req.params.date;
    // console.log(Date);
    const milkOrder = await MilkOrders.find({})
      .sort({ createdAt: "desc" })
      .exec();
    console.log(milkOrder);
    res.status(201).send(milkOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// put : to update the order.
app.put("/milkOrder/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const milkOrder = await MilkOrders.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send(milkOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE: to delete the order.
app.delete("/milkOrder/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const milkOrder = await MilkOrders.findByIdAndDelete(id);
    res.status(201).send(milkOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
