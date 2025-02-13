package com.tnsif.client.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnsif.client.entities.OrderDetails;
import com.tnsif.client.repository.OrderRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepository orderRepository;

	@Override
	public void addOrder(OrderDetails order) {
		// TODO Auto-generated method stub
		orderRepository.save(order);
	}

	@Override
	public void updateOrder(Integer id, OrderDetails order) {
		// TODO Auto-generated method stub
		OrderDetails updateOrder = this.searchOrder(id);
		updateOrder.setDateOfPurchase(order.getDateOfPurchase());
		updateOrder.setPaymentMode(order.getPaymentMode());
		updateOrder.setTotal(order.getTotal());
		this.addOrder(updateOrder);
	}

	@Override
	public OrderDetails searchOrder(Integer id) {
		// TODO Auto-generated method stub
		return orderRepository.findById(id).get();
	}

	@Override
	public void deleteOrder(Integer id) {
		// TODO Auto-generated method stub
		orderRepository.deleteById(id);
	}

	@Override
	public List<OrderDetails> listAllOrders() {
		// TODO Auto-generated method stub
		return orderRepository.findAll();
	}
	
	
}
