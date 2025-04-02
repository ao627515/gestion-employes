// src/routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Création d'un département
router.post('/', departmentController.createDepartment);

// Récupération de tous les départements
router.get('/', departmentController.getDepartments);

// Récupération d'un département spécifique (SHOW)
router.get('/:id', departmentController.getDepartmentById);

// Mise à jour d'un département (UPDATE)
router.put('/:id', departmentController.updateDepartment);

// Suppression d'un département (DESTROY)
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
