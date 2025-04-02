// src/controllers/employeeController.js
const Employee = require('../models/Employee');

// Créer un employé
exports.createEmployee = async (req, res) => {
  try {
    const { lastname, firstname, department } = req.body;
    const employee = new Employee({ lastname, firstname, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir tous les employés avec leur employee
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeesById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('department');;
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un employee (UPDATE)
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) {
      return res.status(404).json({ error: "Employee non trouvé" });
    }
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un employee (DESTROY)
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee non trouvé" });
    }
    res.json({ message: "Employee supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};