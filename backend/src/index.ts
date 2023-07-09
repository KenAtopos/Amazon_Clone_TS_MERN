import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import path from "path";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";
import { keyRouter } from "./routers/keyRouter";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/amazonCloneDB";

mongoose.set("strictQuery", true); // by using this, mongodb will filter out any fields are not in the schema

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error mongodb");
  });

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.use("/api/keys", keyRouter);

// server frontend through backend
app.use(express.static(path.join(__dirname, "../../frontend/dist"))); // server the static files
app.get("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
); // The "*" means that this route will match any route that hasn't already been matched by previous route handlers.

const PORT: number = parseInt((process.env.PORT || "4000") as string, 10);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
