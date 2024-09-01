const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')

// const productRoutes = require('./routes/productsRoutes')
// const vendorRoutes = require('./routes/vendorRoutes')
// const reviewRoutes = require("./routes/reviewRoutes");
// const addressRoutes = require("./routes/addressRoutes");
// const blogsRoutes = require("./routes/blogsRoutes");
// const adduserRoutes = require("./routes/userRoutes");
// const customersRoutes = require("./routes/customersRoutes");
// const vendorsRoutes = require("./routes/vendorsRoutes");
// const ordersRoutes = require("./routes/ordersRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");
// const refundRoutes = require("./routes/refundRoutes");

const app = express()

require('dotenv').config()


const { MONGODB_URL, PORT } = process.env;
console.log(MONGODB_URL);

const port = PORT || 4000;

mongoose
  .connect(MONGODB_URL)
  .then((result) => console.log("Database is connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


app.use(express.json()) // Parse result into json

app.use(cors()); // Allow cross origin resource sharing

// app.use(express.static('uploads'))

app.use(express.static(path.join(__dirname, "./dist/")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/"));
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader('Access-Control-Allow-Headers', "application/json")
});
// For Production serve html from server


// app.use('/uploads', express.static('uploads'))


// app.use('/api/products', productRoutes)
// app.use('/api/vendors', vendorRoutes)
// app.use("/api/review", reviewRoutes);
// app.use("/api/address", addressRoutes);
// app.use("/api/blogs", blogsRoutes);
// app.use("/api/user", adduserRoutes);
// app.use("/api/customers", customersRoutes);
// app.use("/api/vendors", vendorsRoutes);
// app.use("/api/orders", ordersRoutes);
// app.use("/api/dashboard", dashboardRoutes);
// app.use("/api/refund", refundRoutes);



// app.use('/uploads', uploads)



