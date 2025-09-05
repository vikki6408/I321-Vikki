import express from "express";
import {getPizza, createPizza} from "../controllers/pizzas.js";



const router = express.Router();

// GET /api/users
router.get("/:id", getPizza);

// POST /api/users
router.post("/", createPizza);

//router.patch("/:id", patchPizza);

//router.delete("/:id", deletePizza);

router.get('/', function(req, res) {
    res.json({ message: 'Bienvenue sur ma route Express' });
});


export default router;
