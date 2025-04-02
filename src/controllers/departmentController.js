// src/controllers/departmentController.js
const Department = require('../models/Department');

// Créer un département
exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const department = new Department({ name });
    await department.save();
    res.status(201).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir tous les départements
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Récupérer un département par son ID (SHOW)
exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({ error: "Département non trouvé" });
    }
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un département (UPDATE)
exports.updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!department) {
      return res.status(404).json({ error: "Département non trouvé" });
    }
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un département (DESTROY)
exports.deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) {
      return res.status(404).json({ error: "Département non trouvé" });
    }
    res.json({ message: "Département supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
