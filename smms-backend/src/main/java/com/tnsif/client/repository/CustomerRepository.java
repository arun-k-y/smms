package com.tnsif.client.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnsif.client.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
