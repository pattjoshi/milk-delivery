# milk-delivery

## Create REST API for a milk delivery application. **(MEN)**

- GET: To get all orders for a particular date.

- POST: To place an order.

- PUT: To Edit an order.

- DELETE: To Delete an order.

---


## Must have in your system
- node.js
- mongodb.

*************

### Installation 

#### Download project

`git clone https://github.com/pattjoshi/milk-delivery.git`

#### Install Dependancies
After cloning/downloading the source code, change directory to project folder ( project root folder ). 
Run following command: 
`npm install`

This command will install all the required dependancies.
`npm run dev`

---

- `app.get("/milkOrder/:date", async (req, res)`
- `localhost:5000/milkOrder/2022-08-20`

<img width="793" alt="image" src="https://user-images.githubusercontent.com/78966839/185760789-1a65bc9e-7a1b-489b-8d97-679b0cbae306.png">


```
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

```


