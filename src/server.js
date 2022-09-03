import express from "express";
require("./db/conn");
import mongoose from "mongoose";

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

// put : toupdate an order
app.put("/milkOrder/:id", async (req, res) => {
  try {
    const milkOrder = await MilkOrders.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!milkOrder) {
      return res.status(404).send("No order found");
    }
    res.status(200).send(milkOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// get all orders
app.get("/milkOrder", async (req, res) => {
  try {
    const milkOrder = await MilkOrders.find({});
    res.status(200).send(milkOrder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// get  order for partucular date
app.get("/milkOrder/:date", async (req, res) => {
  try {
    const milkOrder = await MilkOrders.find({
      createdAt: {
        $gte: new Date(req.params.date),

        $lt: new Date(req.params.date).setDate(
          new Date(req.params.date).getDate() + 1
        ), // 1 day after
      },
    });
    res.status(200).send(milkOrder);
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
