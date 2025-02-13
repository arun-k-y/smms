package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.Customer;
import com.tnsif.client.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public void addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customerRepository.save(customer);
	}

	@Override
	public void updateCustomer(Integer id, Customer customer) {
		// TODO Auto-generated method stub
		Customer updateCustomer = this.searchCustomer(id);
		updateCustomer.setEmail(customer.getEmail());
		updateCustomer.setName(customer.getName());
		updateCustomer.setOrders(customer.getOrders());
		updateCustomer.setPhone(customer.getPhone());
		this.addCustomer(updateCustomer);
	}

	@Override
	public Customer searchCustomer(Integer id) {
		// TODO Auto-generated method stub
		return customerRepository.findById(id).get();
	}

	@Override
	public void deleteCustomer(Integer id) {
		// TODO Auto-generated method stub
		customerRepository.deleteById(id);
	}

	@Override
	public List<Customer> listAllCustomers() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}




}
