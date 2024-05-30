const connectToMongo=require('./db');
const express = require('express')
let cors = require('cors')
const Details=require("./models/Details")
connectToMongo();
const app = express()
const port = 5000
app.use(cors());
app.use("/files",express.static("files"))
app.use(express.json());
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/details',require('./Routes/details'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})