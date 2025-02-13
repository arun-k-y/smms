package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.Customer;

public interface CustomerService {

	void addCustomer(Customer customer);
	
	void updateCustomer(Integer id,Customer customer);
	
	Customer searchCustomer(Integer id);
	
	void deleteCustomer(Integer id);

	List<Customer> listAllCustomers();
}
