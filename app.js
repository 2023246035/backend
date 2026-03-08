const express = require("express");
const cors = require("cors");

const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/customers", customerRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});