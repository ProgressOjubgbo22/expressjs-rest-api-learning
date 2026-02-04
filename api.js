const express = require("express");
const router = express.Router();

// Import controller functions
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("./restful");

// ==========================
// Routes
// ==========================

// GET /api/users      
router.get("/", getUsers);

// GET /api/users/:id 
router.get("/:id", getUserById);

// POST /api/users    
router.post("/", createUser);

// PUT /api/users/:id   
router.put("/:id", updateUser);

// DELETE /api/users/:id 
router.delete("/:id", deleteUser);

module.exports = router;
