package com.tnsif.client.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tnsif.client.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	Optional<Employee> findByAddress(String address);
}
