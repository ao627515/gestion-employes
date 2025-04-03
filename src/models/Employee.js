// src/models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  // Référence au département
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
