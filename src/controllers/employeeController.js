// src/controllers/employeeController.js
const Employee = require('../models/Employee');

// Créer un employé
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const employee = new Employee({ name, email, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir tous les employés avec leur département
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
