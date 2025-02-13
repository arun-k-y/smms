package com.tnsif.client.service;

import java.util.List;

import com.tnsif.client.entities.OrderDetails;

public interface OrderService {

	void addOrder(OrderDetails order);
	
	void updateOrder(Integer id,OrderDetails order);
	
	OrderDetails searchOrder(Integer id);
	
	void deleteOrder(Integer id);

	List<OrderDetails> listAllOrders();
}
