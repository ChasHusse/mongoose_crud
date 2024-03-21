const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Middleware to accept JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

//Homepage
app.get("/", (req, res) => {
  res.send(
    "Hello from Node API. This is a response from the Node API to the client."
  );
});

//Start the server
app.listen(3000, () => {
  console.log("Server is running on: http://localhost:3000/");
});

//Connect to the database
mongoose
  .connect(
    "mongodb+srv://husseinyousif:XcQLcd9c3m2E0jix@backenddb.d46lxwl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database.");
  })
  .catch(() => {
    console.log("Connection failed.");
  });

/* 

  
//Show all products.
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
});

//Show a specifk product.
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
});

//Add product to database.
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messege: error.message });
  }
});

//Update a product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //First parameter is the id of the product, second parameter what you wanna update.
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
});

//Delete Product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted!" });
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
}); */
