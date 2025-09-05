// Simulation d'une "base de données"
let Pizza =
    [{ id: 1, name: "Margharita" },
    { id: 2, name: "Hawaïenne" }];

// GET /api/pizzas
export const getAllPizza = (req, res) => {
    res.json(Pizza);
};

export const getPizza = (req, res) => {
    const id = parseInt(req.params.id); // récupérer l'id dans l'URL
    const pizza = Pizza.find(pizza => pizza.id === id); // chercher la pizza

    if (!pizza) {
        return res.status(404).json({ message: "Pizza not found" });
    }

    res.json(pizza);
};

// POST /api/pizzas
export const createPizza = (req, res) => {
    const newPizza = { id: Date.now(), ...req.body };
    Pizza.push(newPizza);
    res.status(201).json(newPizza);
};
