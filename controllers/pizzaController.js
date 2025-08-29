// Simulation d'une "base de données"
let Pizza = [{ id: 1, name: "Margharita" }];

// GET /api/pizzas
export const getPizza = (req, res) => {
    res.json(Pizza);
};

// POST /api/pizzas
export const createPizza = (req, res) => {
    const newPizza = { id: Date.now(), ...req.body };
    Pizza.push(newPizza);
    res.status(201).json(newPizza);
};
