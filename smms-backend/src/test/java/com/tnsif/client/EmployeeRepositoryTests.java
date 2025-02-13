package com.tnsif.client;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.tnsif.client.entities.Employee;
import com.tnsif.client.repository.EmployeeRepository;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class EmployeeRepositoryTests {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Test
	@Order(1)
	public void saveEmployeeTest() {
		Employee employee = new Employee("Raj",LocalDate.parse("2007-12-03"), 10000.0f, "Hyd", "Manager");
		employeeRepository.save(employee);
		Assertions.assertThat(employee.getId()).isGreaterThan(0);
	}
	
//	@Test
//	@Order(2)
//	public void getEmployeeTest() {
//		Employee employee = employeeRepository.findById(1).get();
//		Assertions.assertThat(employee.getId()).isEqualTo(1);
//	}
//	
//	@Test
//	@Order(3)
//	public void getListOfEmployeesTest() {
//		List<Employee> employees = employeeRepository.findAll();
//		assertThat(employees.size()).isGreaterThan(0);
//	}
//	
//	@Test
//	@Order(4)
//	public void updateEmployeeTest() {
//		Employee employee = employeeRepository.findById(21).get();
//		employee.setAddress("France");
//		employeeRepository.save(employee);
//		Assertions.assertThat(employeeRepository.save(employee).getAddress()).isEqualTo("France");
//		
//	}
//	
//	@Test
//	@Order(5)
//	public void deleteEmployeeTest() {
//		Employee employee = employeeRepository.findById(21).get();
//		
//		employeeRepository.delete(employee);
//		
//		Employee employee1 = null;
//		
//		Optional<Employee> optionalEmployee = employeeRepository.findByAddress("France");
//		
//		if (optionalEmployee.isPresent()) {
//			employee1 = optionalEmployee.get();
//		}
//		
//		Assertions.assertThat(employee1).isNull();
//	}
	
}
