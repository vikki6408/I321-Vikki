import express from "express";
import { getPizza, createPizza } from "../controllers/pizzaController.js";



const router = express.Router();

// GET /api/users
router.get("/api/pizzas", getPizza);

// POST /api/users
router.post("/api/pizzas", createPizza);

router.get('/', function(req, res) {
    res.json({ message: 'Bienvenue sur ma route Express' });
});


export default router;
