package com.tnsif.client.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnsif.client.entities.OrderDetails;

public interface OrderRepository extends JpaRepository<OrderDetails, Integer> {

}
