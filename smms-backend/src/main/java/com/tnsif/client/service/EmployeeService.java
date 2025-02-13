package com.tnsif.client.service;


import java.util.List;

import com.tnsif.client.entities.Employee;

public interface EmployeeService {

	void addEmployee(Employee employee);
	
	void updateEmployee(Integer id,Employee employeeDetails);
	
	Employee searchEmployee(Integer id);
	
	void deleteEmployee(Integer id);

	List<Employee> listAllEmployees();
	
}
