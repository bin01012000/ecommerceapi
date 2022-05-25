import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import routerCategory from "./routes/category.js";
import routerProduct from "./routes/product.js";
import routerUser from "./routes/user.js";
import routerFav from "./routes/fav.js";
import path from "path";
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use("/", routerUser);
app.use("/", routerProduct);
app.use("/", routerCategory);
app.use("/", routerFav);

app.get("/", (req, res) => {
  res.send("Hello get");
});

app.post("/", (req, res) => {
  res.send("Hello post");
});

app.listen(port, () => {
  console.log(`Server is listenning on port: http://localhost:${port}`);
});
