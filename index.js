import express from "express";
import pizzaRoutes from "./routes/pizzaRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

// Brancher les routes
// app.use("/api/pizzas", pizzaRoutes);

app.use("/", pizzaRoutes);

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
