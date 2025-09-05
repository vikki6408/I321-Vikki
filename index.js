import express from "express";
import pizzaRoutes from "./routes/pizzas.js";
import router from "./routes/pizzas.js";

const app = express();
const port = 3000;

app.use(express.json());

// Brancher les routes
// app.use("/api/pizzas", pizzaRoutes);

app.use("/api/v1/pizzas", pizzaRoutes);


app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});

