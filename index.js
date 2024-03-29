const express = require("express");

const router = require("./routes/");
const db = require("./config/mongoose");

//1) Starting app
const app = express();

//2) MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.static("assests"));

//Setting View engine and Templates folder location
app.set("view engine", "ejs");
app.set("views");

// 3) Server
// Setting the port for server
const port = 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(`Error starting sever: ${err}`);
    return;
  }

  console.log(`Server is up and running at: ${port}`);
});
