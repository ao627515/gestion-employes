// src/models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Référence au département
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
