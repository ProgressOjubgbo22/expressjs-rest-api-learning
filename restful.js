// ==========================
// In-memory Users Data
// ==========================
let users = [
    { id: 1, name: "Drake" },
    { id: 2, name: "Rema" }
];

// ==========================
// Controller Functions
// ==========================

// GET /api/users
exports.getUsers = (req, res) => {
    res.json(users);
};

// GET /api/users/:id
exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
};

// POST /api/users
exports.createUser = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

// PUT /api/users/:id
exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    user.name = name;
    res.json(user);
};

// DELETE /api/users/:id
exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userExists = users.some(u => u.id === userId);

    if (!userExists) {
        return res.status(404).json({ message: "User not found" });
    }

    users = users.filter(u => u.id !== userId);
    res.json({ message: "User deleted successfully" });
};
