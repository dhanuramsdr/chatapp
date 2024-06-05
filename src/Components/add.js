import React, { useState } from 'react';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Anu', email: 'anu@gmail.com', phone: '123-456-7890', userId: 'S667', active: true },
    { id: 2, name: 'mani', email: 'mani@mail.com', phone: '987-654-3210', userId: 'S677', active: true },
    { id: 3, name: 'puvan', email: 'puvan@mail.com', phone: '987-654-3210', userId: 'S678', active: true },
    { id: 4, name: 'ram', email: 'ram@mail.com', phone: '987-654-3210', userId: 'S679', active: true },
    { id: 5, name: 'anusiya', email: 'annathai.r@gmail.com', phone: '987-654-3210', userId: 'S680', active: true },
    // Add more employees as needed
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    userId: '',
    active: true,
  });

  const [editEmployee, setEditEmployee] = useState(null);

  const handleInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setNewEmployee({ name: '', email: '', phone: '', userId: '', active: true });
  };

  const handleToggleStatus = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, active: !employee.active } : employee
      )
    );
  };

  const handleEditEmployee = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);
    setEditEmployee(employeeToEdit);
  };

  const handleUpdateEmployee = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === editEmployee.id ? editEmployee : employee
      )
    );
    setEditEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <h2>Employee Management</h2>

      {/* Add Employee */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmployee.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newEmployee.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newEmployee.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newEmployee.userId}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>

      {/* Display Employees */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.userId}</td>
              <td>
                <button onClick={() => handleToggleStatus(employee.id)}>
                  {employee.active ? 'Deactivate' : 'Activate'}
                </button>
              </td>
              <td>
                <button onClick={() => handleEditEmployee(employee.id)}>Edit</button>
                <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Employee */}
      {editEmployee && (
        <div>
          <input
            type="text"
            name="name"
            value={editEmployee.name}
            onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
          />
          <input
            type="text"
            name="email"
            value={editEmployee.email}
            onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })}
          />
          <input
            type="text"
            name="phone"
            value={editEmployee.phone}
            onChange={(e) => setEditEmployee({ ...editEmployee, phone: e.target.value })}
          />
          <input
            type="text"
            name="userId"
            value={editEmployee.userId}
            onChange={(e) => setEditEmployee({ ...editEmployee, userId: e.target.value })}
          />
          <button onClick={handleUpdateEmployee}>Update</button>
          <button onClick={() => setEditEmployee(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;

