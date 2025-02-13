package com.tnsif.client.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tnsif.client.entities.Customer;
import com.tnsif.client.service.CustomerService;

@RestController
@RequestMapping("customer")
public class CustomerController {

	@Autowired
	private CustomerService service;
		
	@GetMapping("/list")
	public List<Customer> getAllCustomers(){
		return service.listAllCustomers();
	}
	
	@GetMapping("/search/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable Integer id){
		Customer customer = service.searchCustomer(id);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}	
	
	@PostMapping("/create")
	public void createCustomer(@RequestBody Customer customer) {
		service.addCustomer(customer);
	}	
	
	@DeleteMapping("/delete/{id}")
	public void deleteCustomerById(@PathVariable Integer id) {
		service.deleteCustomer(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateCustomer(@PathVariable Integer id,@RequestBody Customer customer){
		service.updateCustomer(id, customer);
	}
}
